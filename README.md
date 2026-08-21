# Zurich User Management Application

A secure user management application built as part of the Zurich Web Developer Assignment.

The application is built using Next.js, React, TypeScript, Redux Toolkit, Better Auth, Google OAuth2, Jest, React Testing Library, and Tailwind CSS.

## Features

- Google OAuth2 authentication
- Protected user routes
- Server-side rendering with Next.js
- Server Actions for on-demand requests
- Redux Toolkit for state management
- Secure server-side API communication
- ReqRes API integration
- Email masking
- Show/Hide email functionality
- User details page
- Reusable Header and Footer components
- Logout functionality
- Loading and error states
- TypeScript
- ESLint
- Unit tests using Jest and React Testing Library

## Technology Stack

- Next.js 16
- React
- TypeScript
- Redux Toolkit
- React Redux
- Better Auth
- Google OAuth2
- Tailwind CSS
- Jest
- React Testing Library
- ReqRes API
- ESLint

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

The users page is implemented as a Next.js Server Component.

User data is retrieved through server-side API functions, keeping the ReqRes API key away from the browser.

The application displays the available users and provides:

Email masking
Show/Hide email functionality
User details navigation
Refresh functionality

### 3. Email Privacy

Email addresses are hidden by default.

The user can click Show Email to reveal the email address and Hide Email to hide it again.

### 4. User Details

Clicking a user opens: /users/[id]

The details page displays:

Profile image
First name
Last name
Email
User ID

A Back to Users link allows the user to return to the users list.

### 5. Server-Side Architecture

The application uses Next.js Server Components for server-side data fetching.

Client Components are used only where browser-side interactivity is required, such as:

Google login
Logout
Email visibility
Refresh interaction
Authentication state

Server Actions are used for on-demand operations initiated by the client.

### Security

Security and data privacy are important considerations in the application.

The ReqRes API key is stored in environment variables.
Google OAuth credentials are stored in environment variables.
Sensitive credentials are never exposed through NEXT_PUBLIC_* environment variables.
Protected routes perform server-side authentication checks.
API communication containing sensitive credentials is handled on the server.
.env files are excluded from Git using .gitignore.

Environment Variables

Create a .env.local file in the project root:

REQRES_API_KEY=your_reqres_api_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

### Code Quality

The application follows a component-based architecture with an emphasis on:

Server/client separation
Reusable components
Type safety
Separation of concerns
Secure API communication
Maintainable state management
Error and loading states
ESLint validation
Unit testing

### Conclusion

The application was implemented with a focus on security, maintainability, reusability, type safety, authentication, server-side rendering, and production-ready Next.js practices.