# Books Store

## Introduction
The Books Store is a web application that allows users to browse, purchase, and manage their book orders. This project consists of a backend API built with Node.js, Express.js, and MongoDB, and a frontend application built with React, Redux, and other supporting libraries.

## Features
- Browse and search for books
- View detailed information about a specific book
- Add books to a shopping cart
- Checkout and place orders
- View order history
- Admin dashboard to manage books and orders

## Technologies Used
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT (JSON Web Tokens)
  - bcrypt (password hashing)
- **Frontend**:
  - React
  - Redux Toolkit
  - React Router
  - Axios
  - Tailwind CSS
  - SweetAlert2
  - Firebase (Authentication)

## Environment Variables
### Backend
- `PORT`: The port on which the backend server will run (default: `5000`)
- `DB_URI`: The MongoDB connection string
- `JWT_SECRET_KEY`: The secret key used for JWT token generation

### Frontend
- `VITE_API_KEY`: Firebase API key
- `VITE_AUTH_DOMAIN`: Firebase auth domain
- `VITE_PROJECT_ID`: Firebase project ID
- `VITE_STORAGEBUCKET`: Firebase storage bucket
- `VITE_MESSAGING_SENDER_ID`: Firebase messaging sender ID
- `VITE_APPID`: Firebase app ID

## Installation

### Backend
1. Clone the repository: `git clone https://github.com/ashishj12/Books_Store.git`
2. Navigate to the backend directory: `cd Books-Store/server`
3. Install dependencies: `npm install`
4. Create a `.env` file and configure the necessary environment variables (PORT,DB_URI,JWT_SECRET_KEY)
5. Start the server: `npm start`

### Frontend
1. Navigate to the frontend directory: `cd Books-Store/client`
2. Install dependencies: `npm install`
3. Create a `.env.local` file and configure the necessary environment variables (Firebase configuration)
4. Start the development server: `npm run dev`

## Deployment

### Backend
1. Build the production-ready code: `npm run build`
2. Start the server in production mode: `npm start`

### Frontend
1. Run the client code: `npm run dev`

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request


