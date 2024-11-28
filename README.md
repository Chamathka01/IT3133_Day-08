# IT3133_Day-08
# Using React Router DOM

## 2020ICT57

This React-based project includes a Login System with a basic authentication mechanism and pages for navigation: Home, About Us, and Contact Us. It demonstrates the use of functional components, routing with react-router-dom, and state management.


## Project Overview

### Files
- **App.js**: The main entry point that integrates the login system and navigation.

- **Home.js**: Displays a welcome message for the home page.

- **AboutUs.js**: Provides information about the application or organization.

- **ContactUs.js**: Provides a placeholder for contact details or forms.

- **Login.js**: Handles user login authentication.

- **Dashboard.js**: This file serves as a protected page that users can access only after successful login. It displays personalized or role-specific content and provides navigation to other features or sections of the application.

## Technologies Used

- **React.js**: For building user interfaces.

- **React Router DOM**: For navigation and routing.

- **CSS**: For styling the application

## How to Run
1. Clone the repository and navigate to the project directory.

2. Navigate to project Folder
   ```bash
   cd myapp
   ```
3. Install dependencies:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```bash
   npm install
   ```

4. Start the server
   ```bash
   npm start
   ```

5. Open your browser and navigate to http://localhost:3000.

## Login Credentials
- **Username**: `Admin`
- **Password**: `abc@123`

## Error Handling
- Displays a red error message if required fields are empty or credentials are invalid.
