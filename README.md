# **Todo List API**

A RESTful API for managing a to-do list with user authentication. This project focuses on learning the fundamentals of backend development, including user authentication, schema design, and CRUD operations for tasks.  

---

## **Features**  

- User Registration and Login with secure password hashing.  
- Token-based authentication (using JSON Web Tokens).  
- CRUD operations for tasks (list and create tasks).  
- Validation and error handling for robustness.  

---

## **Tech Stack**  

- **Node.js**: Backend runtime.  
- **Express.js**: Web framework for handling routes and middleware.  
- **MongoDB**: Database for storing users and tasks.  
- **Mongoose**: ODM for MongoDB to handle schema and database operations.  
- **bcrypt**: For password hashing.  
- **jsonwebtoken (JWT)**: For user authentication.  

---

## **Getting Started**  

### **Prerequisites**  
Ensure the following are installed:  
- [Node.js](https://nodejs.org) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com)  

---

### **Installation**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/todo-list-api.git
   cd todo-list-api
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:  
   ```bash
   touch .env
   ```
   Add the following content to the `.env` file:  
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todoDB
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:  
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:5000`.  

---

## **API Endpoints**  

### **Authentication**  

| Endpoint             | Method | Description        | Protected |
|----------------------|--------|--------------------|-----------|
| `/api/auth/register` | POST   | Register a user    | No        |
| `/api/auth/login`    | POST   | Login and get a token | No    |

### **Task Management**  

| Endpoint        | Method | Description       | Protected |
|-----------------|--------|-------------------|-----------|
| `/api/task`     | GET    | Get all tasks     | Yes       |
| `/api/task`     | POST   | Create a new task | Yes       |

---

### **Testing the API**  

Use tools like Postman, cURL, or REST Client in VS Code to test the API.

#### **1. Register a New User**  
- **Request**:  
  ```http
  POST /api/auth/register
  Content-Type: application/json

  {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "securepassword123"
  }
  ```

- **Response**:  
  ```json
  {
      "message": "User registered successfully!"
  }
  ```

#### **2. Login a User**  
- **Request**:  
  ```http
  POST /api/auth/login
  Content-Type: application/json

  {
      "email": "john.doe@example.com",
      "password": "securepassword123"
  }
  ```

- **Response**:  
  ```json
  {
      "token": "your-jwt-token"
  }
  ```

#### **3. Get All Tasks**  
- **Request**:  
  ```http
  GET /api/task
  Authorization: Bearer your-jwt-token
  ```

- **Response**:  
  ```json
  [
      {
          "_id": "task_id",
          "title": "Buy groceries",
          "description": "Milk, Eggs, Bread",
      }
  ]
  ```

#### **4. Create a Task**  
- **Request**:  
  ```http
  POST /api/task
  Authorization: Bearer your-jwt-token
  Content-Type: application/json

  {
      "title": "Finish homework",
      "description": "Complete math exercises"
  }
  ```

- **Response**:  
  ```json
  {
      "message": "Task created successfully!",
      "task": {
          "_id": "task_id",
          "title": "Finish homework",
          "description": "Complete math exercises",
          "user": "user id"
      }
  }
  ```

---

## **Learning Objectives**  

1. **Authentication**: Learn to implement secure user authentication with JWTs.  
2. **CRUD Operations**: Practice creating and managing resources (tasks) with a database.  
3. **Schema Design**: Understand how to structure and relate data using Mongoose schemas.  
4. **Validation**: Ensure input data integrity with proper error handling and validation.  

---

## **Project Structure**  

```plaintext
.
├── models
│   ├── Task.js          # Mongoose schema for tasks
│   └── User.js          # Mongoose schema for users
├── routes
│   ├── auth.js          # Routes for user authentication
│   └── task.js          # Routes for task management
├── controllers
│   ├── authController.js # Authentication logic
│   └── taskController.js # Task management logic
├── .env                 # Environment variables
├── server.js            # Main application entry point
└── README.md            # Project documentation
```

---

## **Contributing**  

Feel free to fork the project, open issues, or submit pull requests to improve this project.  

---



Happy coding and learning! 😊  

