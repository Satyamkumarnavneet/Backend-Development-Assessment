const fs = require('fs');
const path = require('path');
const todosPath = path.join(__dirname, '../data/todos.json');

const fetchTodos = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosPath, 'utf-8'));
    // Implement optional search and filters here
    res.json(todos);
};

const addTodo = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosPath, 'utf-8'));
    const newTodo = {
        id: Date.now().toString(),
        ...req.body,
        done: false,
        lastUpdated: new Date()
    };
    todos.push(newTodo);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
    let todos = JSON.parse(fs.readFileSync(todosPath, 'utf-8'));
    todos = todos.map(todo => todo.id === req.params.id ? { ...todo, ...req.body, lastUpdated: new Date() } : todo);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.json(todos.find(todo => todo.id === req.params.id));
};

const deleteTodo = (req, res) => {
    let todos = JSON.parse(fs.readFileSync(todosPath, 'utf-8'));
    todos = todos.filter(todo => todo.id !== req.params.id);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.status(204).end();
};

const markAsDone = (req, res) => {
    let todos = JSON.parse(fs.readFileSync(todosPath, 'utf-8'));
    todos = todos.map(todo => todo.id === req.params.id ? { ...todo, done: true, lastUpdated: new Date() } : todo);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.json(todos.find(todo => todo.id === req.params.id));
};

module.exports = {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    markAsDone
};
