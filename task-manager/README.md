# Task Manager

A simple task manager app built with React, Express, and MongoDB.

## Features
- **Frontend**: Built with React for creating, displaying, and deleting tasks.
- **Backend**: Express.js API for handling task management.
- **Database**: MongoDB for storing tasks persistently.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

2. Backend Setup:
    Navigate to backend folder
        cd backend
    
    install dependencies
        npm install
    
    create .env file in backend folder with content
        PORT=4000
        MONGO_URI=mongodb://localhost:27017/taskManager
    
3. Frontend Setup:
    Navigate to frontend folder
        cd .../frontend
    
    install dependencies
        npm install

4. Running the app:
    start backend server
        mongod
        cd .../backend
        node server.js
        

    start frontend server
        cd .../frontend
        npm start

    Open your browser and go to http://localhost:3000


Contributions are welcome! Feel free to open an issue or submit a pull request.

This project is licensed under the MIT License.