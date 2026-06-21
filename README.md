# MERN Ecommerce App

A full-stack Ecommerce application built using the MERN stack. Users can browse products, add items to cart, manage cart items, place orders, and view order history.

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Products
- View all products
- Product details display
- Dynamic product listing from MongoDB

### Cart
- Add products to cart
- Remove products from cart
- View cart items
- Quantity management

### Orders
- Place orders from cart
- View order history
- Order status tracking
- Admin order status update API

## Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)

## Project Structure

```
ecommerce-app
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```

## API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Products

| Method | Endpoint |
|----------|----------|
| GET | /api/products |

### Cart

| Method | Endpoint |
|----------|----------|
| POST | /api/cart |
| GET | /api/cart |
| DELETE | /api/cart/:id |

### Orders

| Method | Endpoint |
|----------|----------|
| POST | /api/orders |
| GET | /api/orders |
| PUT | /api/orders/:id |

## Installation

### Clone Repository

```bash
git clone https://github.com/Megha-coder-creator/Ecommerce-app.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

⚠️ Never upload your `.env` file to GitHub.

## Future Improvements

- Product images
- Search functionality
- Product categories
- Payment gateway integration
- Admin dashboard
- Responsive UI improvements

## Author

**Megha Bhardwaj**

- GitHub: https://github.com/Megha-coder-creator
- LinkedIn: www.linkedin.com/in/megha-bhardwaj-coder
