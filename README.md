# Car Store

## Objective 🎯

The purpose of this project is to develop a scalable and efficient **Car Store** application using **Express.js** and **TypeScript**. This project focuses on integrating **MongoDB** with **Mongoose** to manage cars and orders effectively, providing CRUD operations, dynamic inventory updates, and revenue calculations. The application adheres to clean coding principles and industry best practices.

---

## Features ✨

### 1. Car Management

- Add new cars with essential details like model, brand, category, price, and stock.
- Update car information, including price and available quantity.
- Retrieve a list of all cars with options for searching and filtering by brand, category, or model.
- Delete cars from the inventory.

### 2. Order Management

- Place orders for cars while ensuring real-time inventory updates.
- Retrieve detailed information about orders, including order date, car details, and order quantity.
- Handle insufficient stock gracefully by returning appropriate error messages.

### 3. Revenue and Analytics

- Calculate total revenue generated from all completed orders.
- Aggregate data to analyze sales trends and performance.

### 4. Error Handling

- Comprehensive error handling for invalid inputs, missing resources, and operational errors.
- User-friendly error messages to simplify debugging.

### 5. Clean Codebase

- Follows a consistent coding style enforced by **ESLint** and **Prettier**.
- Organized folder structure to improve maintainability and scalability.

---

## Technologies Used 🛠️

| Technology     | Purpose                                         |
| -------------- | ----------------------------------------------- |
| **Node.js**    | Server-side runtime environment.                |
| **Express.js** | Web framework for building APIs.                |
| **TypeScript** | Strongly typed superset of JavaScript.          |
| **MongoDB**    | NoSQL database for storing data.                |
| **Mongoose**   | Object Data Modeling (ODM) library for MongoDB. |
| **ESLint**     | Linter for code quality checks.                 |
| **Prettier**   | Code formatter for clean and readable code.     |
| **Nodemon**    | Auto-restarts the server during development.    |
| **Postman**    | API testing and debugging tool.                 |

---

## Installation and Setup ⚙️

### Prerequisites

- Install **Node.js** (v16+ recommended).
- Set up a **MongoDB** database (local or cloud-based like MongoDB Atlas).

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd car-store
   ```
2. **Install using npm**
   ```bash
   npm i
   ```
3. ## Live Demo
   ```bash
   [Live link](https://car-store-project-tan.vercel.app/).   
   ```