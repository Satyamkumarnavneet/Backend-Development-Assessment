const fs = require('fs');
const path = require('path');

const todosPath = path.join(__dirname, '../data/todos.json');

// Helper function to read todos from file
const readTodos = () => {
    try {
        const data = fs.readFileSync(todosPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error reading todos data');
    }
};

// Helper function to write todos to file
const writeTodos = (todos) => {
    try {
        fs.writeFileSync(todosPath, JSON.stringify(todos, null, 2));
    } catch (error) {
        throw new Error('Error writing todos data');
    }
};

const getTodos = (filters = {}) => {
    const todos = readTodos();
    return todos.filter(todo => {
        // Apply filters if any
        return (!filters.title || todo.title.includes(filters.title)) &&
               (!filters.description || todo.description.includes(filters.description)) &&
               (filters.done === undefined || todo.done === filters.done);
    });
};

const addTodo = (todo) => {
    const todos = readTodos();
    todos.push(todo);
    writeTodos(todos);
};

const updateTodo = (id, updatedFields) => {
    let todos = readTodos();
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) throw new Error('Todo not found');
    todos[index] = { ...todos[index], ...updatedFields, lastUpdated: new Date().toISOString() };
    writeTodos(todos);
};

const deleteTodo = (id) => {
    let todos = readTodos();
    todos = todos.filter(todo => todo.id !== id);
    writeTodos(todos);
};

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};
