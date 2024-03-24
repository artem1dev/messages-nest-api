# Simple messages api

This app is really simple. It just use local storage for storing simple messages. It can serve as a solid foundation for more complex projects.

# Installing

## Prerequisites

Before you begin, ensure you have Node.js version 18.16.0 or later installed on your machine.

## Getting Started

To get started with the project, install all dependencies:

   ```bash
   npm install
   ```
## Environment Configuration

The repository includes an `example.env` file. You should create the following environment files:

- `.env`: Default environment for new scripts

You can use the `example.env` file as a template.

DB_JSON_NAME - String: Name of database to use
PORT - Integer: Number of port for server startup 

## Running the Application

To run the application, use the following commands:

- **Development**:

  ```bash
  npm run start:dev
  ```

- **Production**:

  ```bash
  npm run build
  npm run start:prod
  ```

Once the application is running, you can access it via `http://localhost:3000/`.
