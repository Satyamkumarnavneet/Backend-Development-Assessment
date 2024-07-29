# Todo List Application

## Overview

This is a Todo List application built using Node.js, Express.js, and JSON file storage. The application allows users to manage their todo items through a set of API endpoints. It supports operations such as fetching todos, adding new todos, updating existing todos, deleting todos, and marking todos as completed.

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

### API Endpoints

- `GET /todos`: Retrieve the list of todos with optional search and filters.
- `POST /todos`: Add a new todo item to the list.
- `PUT /todos/:id`: Update an existing todo item.
- `DELETE /todos/:id`: Remove a todo item from the list.
- `PATCH /todos/:id/markAsDone`: Mark a todo item as completed.

### Error Handling

- Default 404 error handling for unknown routes.
- Default 500 error handling for server errors.

### Future Enhancements

- Use a database like MongoDB, PostgreSQL, or MySQL for data storage.
- Implement caching strategies using Redis or in-memory caches.
- Add unit tests for controllers and models.
- Implement logging using libraries like `winston`.

## Setup and Run

### Prerequisites

- Node.js installed on your system.
- npm (Node Package Manager) installed.

### Steps to Set Up and Run the Application

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Satyamkumarnavneet/Todo-List-App-API
    cd Todo-List-App-API
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Application**

    ```bash
    npm start
    ```

    The server will start running on `http://localhost:3000`.

4. **Test the API Endpoints**

    Use Postman or any other API client to test the API endpoints. Here are some example requests:

    - **Fetch Todos**
        - URL: `GET http://localhost:3000/todos`
    - **Add Todo**
        - URL: `POST http://localhost:3000/todos`
        - Body: `{
            "title": "New Todo",
            "description": "Description of the new todo"
          }`
    - **Update Todo**
        - URL: `PUT http://localhost:3000/todos/:id`
        - Body: `{
            "title": "Updated Title",
            "description": "Updated description"
          }`
    - **Delete Todo**
        - URL: `DELETE http://localhost:3000/todos/:id`
    - **Mark As Done**
        - URL: `PATCH http://localhost:3000/todos/:id/markAsDone`

For detailed API documentation and to see the API in action, visit the [Postman Documentation](https://documenter.getpostman.com/view/16476251/2sA3kaDznq).

## Conclusion

This Todo List application serves as a basic example of how to build a RESTful API with Node.js and Express.js. It is designed to be easily extendable and scalable for future enhancements.
