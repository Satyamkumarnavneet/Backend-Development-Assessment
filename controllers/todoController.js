const todoModel = require('../models/todoModel');

const fetchTodos = (req, res) => {
    try {
        const filters = req.query;
        const todos = todoModel.getTodos(filters);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
};

const addTodo = (req, res) => {
    try {
        const newTodo = {
            id: Date.now().toString(),
            ...req.body,
            done: false,
            lastUpdated: new Date().toISOString()
        };
        todoModel.addTodo(newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add todo' });
    }
};

const updateTodo = (req, res) => {
    try {
        const updatedFields = req.body;
        const updatedTodo = todoModel.updateTodo(req.params.id, updatedFields);
        res.json(updatedTodo);
    } catch (error) {
        res.status(404).json({ error: 'Todo not found' });
    }
};

const deleteTodo = (req, res) => {
    try {
        todoModel.deleteTodo(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: 'Todo not found' });
    }
};

const markAsDone = (req, res) => {
    try {
        const updatedTodo = todoModel.updateTodo(req.params.id, { done: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(404).json({ error: 'Todo not found' });
    }
};

module.exports = {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    markAsDone
};
