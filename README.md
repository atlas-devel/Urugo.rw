# Urugo.rw

Welcome to the Urugo.rw project repository! This is a full-stack real estate and property management platform.

## 🏗️ Project Structure

This is a monorepo setup containing both the client application and the server-side API:

- **[`/frontend`](./frontend/)**: The front-end application, built with React and Vite. It contains specific views and routing for different user roles.
- **[`/backend`](./backend/)**: The back-end service, built with Node.js and Prisma ORM for database management and API routes.

## 👥 User Roles

The platform is designed to handle multiple distinct user roles, including:
- **Admin**: For overall platform and user management.
- **Agent**: For real estate agents managing properties.
- **Landlord**: For property owners managing their listings.
- **Renter**: For users looking to rent properties.
- **Guest / Public**: For unauthenticated users browsing properties.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Urugo.rw
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   pnpm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   pnpm install
   ```

### Running the Application

Please refer to the enclosed `README.md` files within the `frontend` and `backend` directories for specific instructions on how to start their respective development servers, configure environment variables, and run database migrations.
