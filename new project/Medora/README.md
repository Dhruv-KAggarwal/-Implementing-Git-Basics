# Medora Healthcare Web Application

## Overview
Medora is a simple healthcare web application designed for user registration and role-based access. The application allows users to register, log in, and access different functionalities based on their roles (Patient, Doctor, Chemist).

## Project Structure
```
Medora
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── app.js
│   │   └── auth.js
├── views
│   ├── index.html
│   ├── register.html
│   └── dashboard.html
├── README.md
```

## Features
- User registration with role selection
- User login functionality
- Role-based access to different dashboard views
- Responsive design for various devices

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to access the application.
3. Use the registration form to create a new user account.
4. Log in with the registered credentials to access the dashboard.

## Usage Guidelines
- Ensure that you select the appropriate role during registration to access the corresponding features in the dashboard.
- The application uses localStorage to simulate user data storage. Refreshing the page will not affect the stored data.

## Technologies Used
- HTML
- CSS
- JavaScript

## Future Enhancements
- Implement backend integration for persistent data storage.
- Add more user roles and functionalities.
- Improve the user interface with advanced CSS frameworks.