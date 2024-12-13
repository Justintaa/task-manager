# Task Manager

A simple task manager app built with React, Express, and MongoDB.

---

## Features
- **Frontend**: Built with React for creating, displaying, and deleting tasks.
- **Backend**: Express.js API for handling task management.
- **Database**: MongoDB for storing tasks persistently.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
2. Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder with the following content:

env
Copy code
PORT=4000
MONGO_URI=mongodb://localhost:27017/taskManager
3. Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Running the Application
Start the MongoDB Server
Make sure MongoDB is running locally:

bash
Copy code
mongod
Start the Backend Server
Navigate to the backend folder and start the server:

bash
Copy code
cd ../backend
node server.js
Start the Frontend Server
Navigate to the frontend folder and start the server:

bash
Copy code
cd ../frontend
npm start
Open your browser and go to http://localhost:3000 to use the app.


Contributions are welcome! Feel free to open an issue or submit a pull request.

This project is licensed under the MIT License.