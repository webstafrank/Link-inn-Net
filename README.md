Link-Inn-Net

Link-Inn-Net is a modern web application designed to connect users to fast and affordable internet services while providing a platform for community engagement through posts, ideas, trends, and opportunities. Built using the MERN stack, this application is robust, scalable, and user-friendly.

Features

Frontend:

Modern UI with a responsive design.

Hero Section to introduce the service and its benefits.

Dynamic Navigation Bar with hover effects and call-to-action buttons.

Community Hangout Platform for engaging posts and sharing ideas.

Packages Section to showcase internet plans.

Backend:

Authentication API for secure login and signup.

Database Integration with MongoDB for data persistence.

Robust Routing for user and post management.

Technologies Used:

React.js (Frontend)

Node.js & Express.js (Backend)

MongoDB (Database)

TailwindCSS (Styling)

Project Structure

LinkInnNet/
├── backend/                  # Node.js backend with MongoDB
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Backend server logic
│   ├── config/               # Configuration files (e.g., MongoDB)
│   │   └── db.js
│   ├── models/               # Database models
│   │   └── User.js
│   ├── routes/               # API endpoints
│   │   └── authRoutes.js
│   ├── middleware/           # Middleware (e.g., auth validation)
│   ├── controllers/          # Controllers for handling requests
│   └── .env                  # Environment variables (e.g., Mongo URI)
│
├── frontend/                 # React frontend with Tailwind CSS
│   ├── public/               # Public assets (e.g., favicon, index.html)
│   │   └── index.html
│   ├── src/                  # React source files
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.js
│   │   │   ├── HeroSection.js
│   │   │   ├── PackagesSection.js
│   │   │   └── Footer.js
│   │   ├── App.js            # Main React app
│   │   ├── index.js          # Entry point for React
│   │   └── styles.css        # Global styles (Tailwind config)
│
├── README.md                 # Documentation
├── .gitignore                # Git ignored files
└── LICENSE                   # License information

Setup Instructions

Prerequisites

Node.js >= 16

MongoDB

Yarn or npm

Backend Setup

Navigate to the backend folder:

cd backend

Install dependencies:

yarn install

Create a .env file in the backend directory with the following variables:

MONGO_URI=your_mongodb_connection_string
PORT=10000
JWT_SECRET=your_jwt_secret

Start the backend server:

yarn start

Frontend Setup

Navigate to the frontend folder:

cd frontend

Install dependencies:

yarn install

Start the frontend development server:

yarn start

Open the application in your browser at http://localhost:3000.

API Endpoints

Authentication

Method

Endpoint

Description

POST

/api/signup

Register a new user

POST

/api/login

Authenticate a user

Posts

Method

Endpoint

Description

GET

/api/posts

Get all posts

POST

/api/posts

Create a new post

Deployment

Render (Backend):

Push the backend directory to your GitHub repository.

Connect the repository to Render.

Add the environment variables in the Render settings.

Vercel (Frontend):

Push the frontend directory to your GitHub repository.

Connect the repository to Vercel.

Contributing

Fork the repository.

Create a new branch for your feature:

git checkout -b feature-name

Commit your changes and push them:

git add .
git commit -m "Add feature"
git push origin feature-name

Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any inquiries or support, please contact:

Email: support@linkinnnet.com

Website: Link-Inn-Net


