# Zurich User Management Application

A secure user management application built as part of the Zurich Web Developer Assignment.

The application is built using Next.js, React, TypeScript, Redux Toolkit, Better Auth, Google OAuth2, Jest, and React Testing Library.

## Features

- Google OAuth2 authentication
- Protected user routes
- Redux Toolkit for state management
- Secure server-side API communication
- ReqRes API integration
- Pagination
- User filtering
- Email masking
- Show/Hide email functionality
- User details page
- Reusable Header and Footer components
- Logout functionality
- Unit tests using Jest and React Testing Library
- TypeScript
- ESLint

## Technology Stack

- Next.js 16
- React
- TypeScript
- Redux Toolkit
- React Redux
- Better Auth
- Google OAuth2
- Jest
- React Testing Library
- ReqRes API
- CSS

## Application Flow

### 1. Authentication

Users authenticate using Google OAuth2.

Unauthenticated users attempting to access protected routes are redirected to the login page.

Protected routes:

```text
/users
/users/[id]

After successful authentication, the user is redirected to: /users

### 2. Users List

The users page retrieves user data through the application's server-side API layer.

The application:

Retrieves all available pages from the ReqRes API.
Combines the user records.
Filters users according to the assignment requirements.
Displays the filtered users.
Provides pagination.
Masks email addresses by default.

### 3. User Filtering

Only users matching either of the following conditions are displayed:

First name starts with G
OR last name starts with W

### 4. Email Privacy

Email addresses are masked by default:

****************

The user can click Show Email to reveal the email address.

The email can then be hidden again using Hide Email.

### 5. User Details

Clicking a user opens:

/users/[id]

The details page displays:

Profile image
First name
Last name
Email
User ID

A Back to Users link allows the user to return to the users list.

### Security

Security is an important part of the application.

The ReqRes API key is stored in environment variables and accessed from server-side code.

Sensitive environment variables are not exposed using the NEXT_PUBLIC_ prefix.

The application uses server-side API routes to keep business logic and sensitive API credentials away from the browser.

### Environment Variables

Create a .env.local file in the project root:

REQRES_API_KEY=your_reqres_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

### Conclusion

This project was implemented with a focus on:

Security
Maintainability
Reusable components
Separation of concerns
Type safety
State management
Authentication
Testability
Server-side business logic

