# User Registration, Login & JWT Authentication Using Express.js

**Name:** Bhuvisha Gohil

**Roll Number:** 150096725190

**Course:** B.Tech CSE

**Technology:** Node.js, Express.js, MongoDB Atlas, Mongoose

**Topic:** User Registration, Login & JWT Authentication

---

## Introduction

This assignment demonstrates the implementation of a user registration and authentication system using Express.js, MongoDB Atlas, Mongoose, bcrypt, and JSON Web Token (JWT).

The application covers:

1. User Registration
2. User Login
3. Password Hashing using bcrypt
4. JWT Token Generation
5. JWT Authentication Middleware
6. Protected Profile Route

The project demonstrates concepts such as Express Router, Mongoose models, MongoDB Atlas connection, password hashing, password verification, JWT generation, Authorization headers, middleware, and protected routes.

---

# Project Structure

```text
jwt/
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── authRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

# Assignment 1: User Registration

## Objective

Implement a user registration system that securely stores user details in MongoDB Atlas.

## Problem Statement

Develop an Express.js application that:

* Accepts `name`, `email`, and `password`.
* Checks whether the email already exists.
* Hashes the password using bcrypt.
* Stores the user details in MongoDB Atlas.
* Does not store the original plaintext password.
* Returns a successful registration message.

## Route

```text
POST http://localhost:3000/register
```

## Request Body

```json
{
  "name": "Bhuvisha",
  "email": "bhuvisha@example.com",
  "password": "hello123"
}
```

## Expected Output

```json
{
  "message": "User registered successfully"
}
```

## Concepts Used

* Express.js
* Express Router
* Mongoose
* MongoDB Atlas
* User Schema
* bcrypt
* Password Hashing
* Duplicate Email Checking

## Result

The user was successfully registered and stored in MongoDB Atlas. The password is stored in hashed form using bcrypt instead of plaintext.

---

# Assignment 2: User Login

## Objective

Implement a login system that verifies user credentials and generates a JWT token after successful authentication.

## Problem Statement

Develop an Express.js login route that:

* Finds the user using their email.
* Verifies the password using `bcrypt.compare()`.
* Rejects incorrect credentials.
* Generates a JWT token after successful login.
* Returns the JWT token in the response.

## Route

```text
POST http://localhost:3000/login
```

## Request Body

```json
{
  "email": "bhuvisha@example.com",
  "password": "hello123"
}
```

## Expected Output

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

## Concepts Used

* Login Authentication
* `bcrypt.compare()`
* JSON Web Token
* `jwt.sign()`
* Environment Variables
* User Verification

## Result

The login credentials were successfully verified and a JWT token was generated and returned in the response.

---

# Assignment 3: JWT Authentication Middleware

## Objective

Create authentication middleware that verifies a JWT token before allowing access to protected routes.

## Problem Statement

Develop a middleware that:

* Reads the `Authorization` header.
* Checks for the `Bearer` token format.
* Extracts the JWT token.
* Verifies the token using the JWT secret.
* Allows the request to continue when the token is valid.
* Returns `401 Unauthorized` when the token is missing or invalid.

## Authorization Format

```text
Authorization: Bearer JWT_TOKEN
```

## Concepts Used

* Express Middleware
* Authorization Header
* Bearer Token
* `jwt.verify()`
* `next()`
* HTTP Status Code 401

## Result

The JWT authentication middleware successfully validates tokens and protects routes from unauthorized access.

---

# Assignment 4: Protected Profile Route

## Objective

Create a private `/profile` route that can only be accessed using a valid JWT token.

## Problem Statement

Develop a protected route that:

* Uses the JWT authentication middleware.
* Rejects requests without a token.
* Rejects requests with an invalid token.
* Allows requests with a valid JWT token.
* Displays the authenticated user's ID and email.

## Route

```text
GET http://localhost:3000/profile
```

## Successful Response

```json
{
  "message": "Welcome to your private profile",
  "user": {
    "id": "...",
    "email": "bhuvisha@example.com"
  }
}
```

## Result

The `/profile` route was successfully protected using JWT authentication middleware. Only requests containing a valid JWT token can access the profile.

---

# MongoDB Atlas

The application uses MongoDB Atlas for storing registered users.

The Mongoose connection is configured using the `MONGO_URI` environment variable.

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

The users collection contains:

* Name
* Email
* Hashed Password

The password stored in MongoDB Atlas is hashed using bcrypt.

---

# Environment Variables

Sensitive information is stored in a `.env` file and is not included in the GitHub repository.

The project contains a `.env.example` file:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

The `.env` file is included in `.gitignore` to prevent sensitive credentials from being uploaded.

---

# API Testing

The API endpoints were tested using Thunder Client.

## Routes Tested

```text
POST /register
POST /login
GET /profile
```

## Authentication Tests

The `/profile` route was tested using:

1. No token
2. Invalid token
3. Valid JWT token

---

# Overall Result

The JWT authentication system was successfully implemented using Express.js, MongoDB Atlas, Mongoose, bcrypt, and JSON Web Token.

The application successfully:

* Registers new users.
* Checks for duplicate users.
* Hashes passwords using bcrypt.
* Stores users in MongoDB Atlas.
* Verifies login credentials.
* Generates JWT tokens.
* Authenticates requests using JWT middleware.
* Protects the `/profile` route.
* Rejects unauthorized requests with `401 Unauthorized`.
* Allows authorized users to access their private profile.

---

# Screenshots

## User Registration

### Screenshot 1 — Successful User Registration

The registration request successfully creates a new user.

<img width="1472" height="1432" alt="6A5EBFD8-6072-47D5-80DF-68D3FAED3B82" src="https://github.com/user-attachments/assets/bbf0df13-8920-4405-a8e0-f4c9adc1397e" />


## MongoDB Atlas

### Screenshot 2 — User Stored in MongoDB Atlas

The registered user is successfully stored in the MongoDB Atlas `users` collection.
<img width="2666" height="1206" alt="8AD1204A-D38E-40A9-8BE9-5ED373E28493" src="https://github.com/user-attachments/assets/22fa4f2b-df7e-4b99-82fc-d651f30b42bf" />


### Screenshot 3 — Hashed Password in MongoDB Atlas

The password is stored in hashed form using bcrypt and is not stored as plaintext.

<img width="2666" height="1206" alt="8AD1204A-D38E-40A9-8BE9-5ED373E28493" src="https://github.com/user-attachments/assets/ef979342-cb03-4ff8-96e4-bad1888da6d5" />


## User Login

### Screenshot 4 — Successful Login

The login request successfully verifies the user's email and password.
<img width="1788" height="1320" alt="6B093817-5A8B-4B1B-B2F6-D0DD936F3B5D" src="https://github.com/user-attachments/assets/116fe990-1254-4080-9c19-2240850b5223" />


### Screenshot 5 — JWT Token Received

A JWT token is successfully generated and returned after successful login.

<img width="1788" height="1320" alt="6B093817-5A8B-4B1B-B2F6-D0DD936F3B5D" src="https://github.com/user-attachments/assets/43ac132a-9f87-4612-8ec5-76fb32671f21" />


## JWT Authentication

### Screenshot 6 — Profile Without Token

The `/profile` route is accessed without an Authorization token.
<img width="1302" height="1270" alt="3D0FB29C-E79E-490F-9AD2-CBB850BD6D64" src="https://github.com/user-attachments/assets/7bbfd61c-803c-4c38-a925-50a9dd60057c" />


Expected response:

```text
401 Unauthorized
```

```json
{
  "message": "Access denied. No token provided."
}
```

---

### Screenshot 7 — Profile With Invalid Token

The `/profile` route is accessed using an invalid JWT token.
<img width="1752" height="1196" alt="7C80B296-C844-440E-9C1B-8D014CEE0E44" src="https://github.com/user-attachments/assets/2f42df55-c944-4a92-8819-012bb7ee4828" />


Expected response:

```text
401 Unauthorized
```

```json
{
  "message": "Invalid or expired token."
}
```

---

### Screenshot 8 — Profile With Valid Token

The `/profile` route is accessed using a valid JWT token.
<img width="1680" height="1314" alt="60146698-BA56-4BC4-8251-285798F952FE" src="https://github.com/user-attachments/assets/0614d664-7785-4f23-abcf-1f7d28a1a7a4" />


Expected response:

```text
200 OK
```

```json
{
  "message": "Welcome to your private profile",
  "user": {
    "id": "...",
    "email": "bhuvisha@example.com"
  }
}
```

---

# Conclusion

This assignment successfully demonstrates a complete user authentication system using Express.js.

The implementation covers user registration, secure password hashing, login authentication, JWT token generation, authentication middleware, MongoDB Atlas integration, and protected API routes.

The project demonstrates how JWT-based authentication can be used to secure private resources in an Express.js application.
