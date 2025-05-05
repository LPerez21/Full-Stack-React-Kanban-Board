# Kanban Board Application with JWT Authentication

## Overview

This Kanban Board Application is built to help agile team members securely manage and organize their tasks. The application incorporates JWT authentication to ensure secure access to the task board.

## Features

* Secure login page with username and password authentication.
* JSON Web Tokens (JWT) for secure authentication and authorization.
* Protected routes to ensure secure access.
* Task management with tasks sorted into columns: To-Do, In Progress, and Done.
* Session management including logout and automatic JWT expiry.

## Acceptance Criteria

* Login page with form inputs for username and password.
* JWT-based authentication.
* Error message on incorrect credentials.
* Secure storage of JWT in local storage.
* Logout functionality with JWT removal.
* Redirection to login page if unauthenticated.
* Automatic session expiry after inactivity.

## Technologies

* **Frontend:** React, TypeScript
* **Backend:** Node.js, Express.js
* **Authentication:** JSON Web Tokens (JWT)
* **Database:** PostgreSQL
* **Deployment:** Render

## Installation

### Prerequisites

* Node.js
* npm
* PostgreSQL database

### Clone Repository

```bash
git clone <repository_url>
cd kanban-board
```

### Install Dependencies

```bash
npm install
cd server && npm install
cd ../client && npm install
```

### Environment Variables

Create a `.env` file in the `server` directory:

```env
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET_KEY=your_secret_key
```

## Running the Application

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

## Deployment

Deployed on Render:

* **Live URL:** [Your Render URL](https://full-stack-react-kanban-board-2qh3.onrender.com)

## Screenshots

![Login Page](insert-login-page-screenshot-url)
![Kanban Board](insert-kanban-board-screenshot-url)

## Bonus Features

* ✅ Sort Kanban tickets
* ✅ Filter Kanban tickets

## Repository Quality

* Clear, descriptive commit messages
* Organized file structure and naming conventions
* High-quality, well-commented code

## Contributing

Pull requests and feedback are welcome. For significant changes, please open an issue first to discuss what you would like to change.

## License

MIT License

---

**GitHub Repository:** [Repository Link](https://github.com/LPerez21/Full-Stack-React-Kanban-Board)

**Deployed Application:** [Live URL](https://full-stack-react-kanban-board-2qh3.onrender.com)

---
