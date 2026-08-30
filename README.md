# 🚀 Being IBAN Digital

<p align="center">
  <strong>A Full-Stack Digital Services & E-Commerce Platform</strong>
</p>

<p align="center">
  <em>Built with React, Node.js, Express.js, MongoDB, JWT & Brevo SMTP</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-4+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-8+-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Brevo-SMTP-0B996E?style=for-the-badge" alt="Brevo SMTP">
</p>

---

## 📖 Overview

**Being IBAN Digital** is a full-stack digital services and e-commerce web application designed to provide customers with a seamless platform for:

* 🛍️ Browsing and purchasing products
* 👤 Creating and managing user accounts
* 🔐 Secure JWT-based authentication
* 🛒 Managing shopping carts
* 📦 Placing and tracking orders
* 📅 Booking business meetings
* 📧 Receiving automated email notifications

The application uses **React** on the frontend and **Node.js + Express.js** on the backend, with **MongoDB** as the primary database.

Email notifications are handled through **Nodemailer** and **Brevo SMTP**.

---

## ✨ Features

### 👤 Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing with bcrypt
* Persistent authentication using local storage
* Logout functionality
* Protected API routes
* Authenticated cart and order operations

### 🛍️ Product Management

* Display all available products
* Individual product detail pages
* Dynamic product routing
* Product pricing
* Add products to cart
* MongoDB-backed product data

### 🛒 Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products
* Automatic cart total calculation
* Persistent cart storage for authenticated users
* Restore cart after login

### 📦 Orders

* Checkout/order form
* Create orders
* Store orders in MongoDB
* Associate orders with authenticated users
* Automatically clear cart after successful checkout
* View previous orders
* Automated order confirmation emails

### 📅 Meeting Booking

Customers can request business meetings by providing:

* Full name
* Email address
* Phone number
* Company
* Service
* Preferred date
* Preferred time
* Additional message

Meeting requests are stored in MongoDB and can have the following statuses:

```text
pending
confirmed
completed
cancelled
```

### 📧 Email Notifications

The backend uses:

```text
Nodemailer
     ↓
Brevo SMTP
     ↓
Customer Email
```

Emails can be automatically triggered when:

* A meeting is booked
* An order is successfully placed

### ❌ Custom 404 Page

Invalid frontend routes are handled by a custom **404 Not Found** page.

Example:

```text
http://localhost:5173/something-that-does-not-exist
```

### 📱 Responsive Design

The frontend is designed to work across:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

---

# 🛠️ Tech Stack

## Frontend

| Technology          | Purpose             |
| ------------------- | ------------------- |
| ⚛️ React            | UI development      |
| 🧭 React Router DOM | Client-side routing |
| 📡 Axios            | API communication   |
| 🎨 Tailwind CSS     | Styling             |
| 🔔 React Toastify   | Notifications       |
| ⚡ Vite              | Frontend tooling    |

## Backend

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| 🟢 Node.js    | Runtime                   |
| 🚂 Express.js | REST API                  |
| 🍃 MongoDB    | Database                  |
| 🦫 Mongoose   | MongoDB ODM               |
| 🔐 JWT        | Authentication            |
| 🔒 bcrypt     | Password hashing          |
| ✅ validator   | Input validation          |
| 📧 Nodemailer | Email delivery            |
| ✉️ Brevo SMTP | SMTP provider             |
| 🌐 CORS       | Cross-origin requests     |
| ⚙️ dotenv     | Environment configuration |
| 🔄 Nodemon    | Development server        |

---

# 🏗️ Application Architecture

```text
                         ┌──────────────────────┐
                         │       Customer       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React Frontend     │
                         │      + Vite          │
                         └──────────┬───────────┘
                                    │
                              REST API / Axios
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Express Backend    │
                         │      + Node.js       │
                         └──────────┬───────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
          ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
          │   MongoDB    │  │     JWT      │  │   Nodemailer │
          │   Database   │  │    Auth      │  │              │
          └──────────────┘  └──────────────┘  └──────┬───────┘
                                                      │
                                                      ▼
                                               ┌──────────────┐
                                               │ Brevo SMTP   │
                                               └──────┬───────┘
                                                      │
                                                      ▼
                                               📧 Customer
```

---

# 📁 Project Structure

```text
Being IBAN Digital/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ServiceContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Order.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public/
│   ├── package.json
│   └── .env
│
├── backend/
│   │
│   ├── config/
│   │   └── mongodb.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── meetingController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   ├── orderModel.js
│   │   └── meetingModel.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── meetingRoutes.js
│   │
│   ├── utils/
│   │   └── email.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── .env.example
└── README.md
```

---

# 🚀 Getting Started

## 📋 Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/) 18+
* npm
* MongoDB account/database
* Brevo account with SMTP credentials
* Git

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Rounak200316/Being-IBAN-Digital.git
```

Move into the project:

```bash
cd "Being IBAN Digital"
```

---

# 🔧 Backend Setup

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_brevo_smtp_user
BREVO_SMTP_PASSWORD=your_brevo_smtp_password

MAIL_FROM=your_email@example.com
```

Start the backend:

```bash
npm run server
```

The backend should be available at:

```text
http://localhost:4000
```

Expected console output:

```text
Server started on port 4000
DB connected
Email server is ready
```

---

# 💻 Frontend Setup

Open a second terminal.

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create:

```text
frontend/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the development server:

```bash
npm run dev
```

Vite will provide a URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🔐 Environment Variables

## Backend

| Variable              | Description                    |
| --------------------- | ------------------------------ |
| `PORT`                | Backend server port            |
| `MONGODB_URI`         | MongoDB connection string      |
| `JWT_SECRET`          | Secret used to sign JWT tokens |
| `BREVO_SMTP_HOST`     | Brevo SMTP host                |
| `BREVO_SMTP_PORT`     | Brevo SMTP port                |
| `BREVO_SMTP_USER`     | Brevo SMTP username            |
| `BREVO_SMTP_PASSWORD` | Brevo SMTP password            |
| `MAIL_FROM`           | Sender email address           |

## Frontend

| Variable           | Description          |
| ------------------ | -------------------- |
| `VITE_BACKEND_URL` | Backend API base URL |

---

# 🔗 API Documentation

## 👤 Authentication

### Register

```http
POST /api/user/register
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login

```http
POST /api/user/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

# 🛍️ Product API

### Get All Products

```http
GET /api/product/list
```

### Get Single Product

```http
POST /api/product/single
```

---

# 🛒 Cart API

> 🔒 These endpoints require JWT authentication.

### Get User Cart

```http
GET /api/cart/get
```

Header:

```http
Authorization: Bearer <TOKEN>
```

### Update Cart

```http
POST /api/cart/update
```

Request:

```json
{
  "cartData": {
    "productId": 2
  }
}
```

---

# 📦 Order API

> 🔒 These endpoints require JWT authentication.

### Create Order

```http
POST /api/order/create
```

Header:

```http
Authorization: Bearer <TOKEN>
```

### Get User Orders

```http
GET /api/order/user-orders
```

Header:

```http
Authorization: Bearer <TOKEN>
```

---

# 📅 Meeting API

### Create Meeting Request

```http
POST /api/meeting/create
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "company": "Example Company",
  "service": "Digital Marketing",
  "date": "2026-09-10",
  "time": "11:00",
  "message": "I would like to discuss a marketing strategy."
}
```

### Get Meetings

```http
GET /api/meeting/list
```

---

# 🔒 Authentication Flow

The application uses **JSON Web Tokens (JWT)** for authentication.

The authentication flow is:

```text
User
  │
  ├── Register / Login
  │
  ▼
Backend
  │
  ├── Validate credentials
  ├── Hash / compare password
  └── Generate JWT
  │
  ▼
Frontend
  │
  └── Store authentication information
          │
          ▼
Protected API Request
          │
          └── Authorization: Bearer <TOKEN>
```

Protected endpoints validate the JWT through the authentication middleware.

---

# 📧 Email System

Email functionality is implemented using **Nodemailer** and **Brevo SMTP**.

```text
┌───────────────┐
│ Express API   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  Nodemailer   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  Brevo SMTP   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ Customer Mail │
└───────────────┘
```

The mail utility is located at:

```text
backend/utils/email.js
```

Example:

```javascript
import sendEmail from "../utils/email.js";

await sendEmail({
  to: customerEmail,
  subject: "Order Confirmation",
  text: "Your order has been placed successfully.",
  html: "<h1>Order Confirmed</h1>"
});
```

---

# 🗄️ Database

MongoDB is used as the primary database.

## Users

Collection:

```text
users
```

Stores:

* Name
* Email
* Hashed password
* Cart data

## Products

Collection:

```text
products
```

Stores:

* Product information
* Pricing
* Product details

## Orders

Collection:

```text
orders
```

Stores:

* User ID
* Customer information
* Ordered products
* Product quantities
* Total amount
* Order date

## Meetings

Collection:

```text
meetings
```

Stores:

* Name
* Email
* Phone
* Company
* Service
* Meeting date
* Meeting time
* Additional message
* Meeting status
* Created date

Supported meeting statuses:

```text
pending
confirmed
completed
cancelled
```

---

# 🧪 Development

The application requires two development processes.

### Terminal 1 — Backend

```bash
cd backend
npm run server
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

---

# 🛡️ Security

Sensitive environment variables must **never** be committed to GitHub.

Your `.gitignore` should include:

```gitignore
.env
.env.*
node_modules/
dist/
build/
*.log
```

For collaboration, provide a safe example configuration:

```text
.env.example
```

Example:

```env
PORT=4000

MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_smtp_user
BREVO_SMTP_PASSWORD=your_smtp_password

MAIL_FROM=your_email@example.com
```

**Never put real database credentials, JWT secrets, SMTP passwords, or API keys inside `.env.example`.**

---

# 🐛 Troubleshooting

## Backend Connection Refused

If the frontend displays:

```text
ERR_CONNECTION_REFUSED
```

Make sure the backend is running:

```bash
cd backend
npm run server
```

Also verify:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## MongoDB Connection Error

Check:

```env
MONGODB_URI=your_mongodb_connection_string
```

Verify that:

* The MongoDB URI is correct.
* Your MongoDB database is running.
* Your network/IP access rules allow the connection.
* Your database user has the required permissions.

---

## Email Authentication Error

Verify all Brevo SMTP variables:

```env
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_brevo_smtp_user
BREVO_SMTP_PASSWORD=your_brevo_smtp_password
MAIL_FROM=your_email@example.com
```

Restart the backend after modifying `.env`:

```bash
npm run server
```

---

## CORS Error

Make sure the Express backend enables CORS:

```javascript
app.use(cors());
```

Also verify that the frontend is configured with the correct backend URL:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 404 Page

Invalid frontend routes are handled by the application's custom 404 page.

For example:

```text
http://localhost:5173/invalid-route
```

will display:

```text
404
Page Not Found
```

---

# 🗺️ Roadmap

The following improvements can be added in future versions:

* [ ] Admin dashboard
* [ ] Admin authentication
* [ ] Product management dashboard
* [ ] Order management
* [ ] Order status updates
* [ ] Meeting management
* [ ] Confirm/cancel meeting requests
* [ ] Payment gateway integration
* [ ] Image upload system
* [ ] Cloud image storage
* [ ] Product categories
* [ ] Product search
* [ ] Product filtering
* [ ] Password reset
* [ ] Email verification
* [ ] User profile management
* [ ] Order tracking
* [ ] Production deployment
* [ ] Analytics dashboard

---

# 📸 Screenshots

> Add your application screenshots here to give visitors a visual overview of the platform.

Recommended screenshots:

```text
screenshots/
├── home.png
├── products.png
├── product-details.png
├── cart.png
├── login.png
├── checkout.png
├── orders.png
├── meeting-booking.png
└── mobile-view.png
```

Example:

```markdown
## 📸 Screenshots

### 🏠 Homepage

![Homepage](screenshots/home.png)

### 🛍️ Products

![Products](screenshots/products.png)

### 🛒 Shopping Cart

![Cart](screenshots/cart.png)

### 📅 Meeting Booking

![Meeting Booking](screenshots/meeting-booking.png)
```

---

# 📌 Recommended Repository Structure

The final GitHub repository should ideally contain:

```text
Being IBAN Digital/
│
├── frontend/
├── backend/
├── screenshots/
├── .gitignore
├── .env.example
└── README.md
```

---

# 👨‍💻 Author

## ROUNAK DEY SARKAR


# 📄 License

This project is intended for the **Being IBAN Digital** project.

All rights reserved.

---

<p align="center">
  <strong>Built with ❤️ using React, Node.js, Express & MongoDB</strong>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
</p>
---

# 🌐 Live Demo

🚀 **Try the deployed application:**

👉 [Being IBAN Digital — Live Website](https://being-iban-digital.vercel.app)


---

<p align="center">
  <strong>Built with ❤️ using React, Node.js, Express & MongoDB</strong>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
</p>
