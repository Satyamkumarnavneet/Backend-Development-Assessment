# Todo List Application

## Overview

This is a simple Todo List application built using Node.js, Express.js, and JSON file storage. The application allows users to manage their todo items through a set of API endpoints. It supports operations such as fetching todos, adding new todos, updating existing todos, deleting todos, and marking todos as completed.

## System Design

The application is designed with modularity and scalability in mind, following the MVC (Model-View-Controller) pattern. Although it is a simple Todo List application, it is structured to be easily extendable and maintainable.

### Architecture

- **Models**: Responsible for data storage and retrieval. The current implementation uses a JSON file, but the model is designed to be easily replaceable with a database (e.g., MongoDB, PostgreSQL) without changing the rest of the application.
- **Controllers**: Handle business logic and interact with the models to process requests and send responses. Each controller method is designed to be concise and focused on a single responsibility.
- **Routes**: Define API endpoints and map them to the appropriate controller methods. The routes are modular and can be easily extended as the application grows.

### Repository Structure

- `controllers/` - Contains controller methods for handling requests.
  - `todoController.js`
- `models/` - Contains methods for interacting with the data store.
  - `todoModel.js`
- `routes/` - Defines API routes and maps them to controller methods.
  - `todoRoutes.js`
- `data/` - JSON file used for data storage (to be replaced with a database in future).
  - `todos.json`
- `app.js` - Main application entry point.
- `package.json` - Contains project metadata and dependencies.
- `README.md` - Documentation for the project.
