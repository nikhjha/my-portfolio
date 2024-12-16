# Project Repository

This repository contains the following components:

- **Frontend**: An Angular application to handle the user interface and client-side logic.
- **Sanity Project**: A Sanity CMS project for content management and backend data handling.
- **VS Code Workspace**: A workspace configuration file to streamline development in Visual Studio Code.

## Directory Structure

```
.
├── frontend/        # Angular project directory
├── sanity-project/  # Sanity CMS project directory
├── my-portfolio.code-workspace  # VS Code workspace file
└── README.md        # Documentation file
```

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **Angular CLI** (for the frontend)
- **Sanity CLI** (for the Sanity project)
- **VS Code** (optional but recommended for workspace integration)

## Setup Instructions

### 1. Frontend Setup

Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
```

Run the development server:

```bash
ng serve
```

Access the application at `http://localhost:4200`.

### 2. Sanity Project Setup

Navigate to the `sanity-project` directory and install dependencies:

```bash
cd sanity-project
npm install
```

Start the Sanity Studio:

```bash
sanity start
```

Access the studio at `http://localhost:3333`.

### 3. VS Code Workspace

The repository includes a pre-configured `project.code-workspace` file. To use it:

1. Open Visual Studio Code.
2. Go to `File` -> `Open Workspace`.
3. Select `my-portfolio.code-workspace` from the repository.

This workspace includes settings for both the Angular and Sanity projects to simplify development.

## Development Workflow

1. Make changes to the frontend in the `frontend` directory.
2. Update or manage content in the `sanity-project` directory.
3. Use the VS Code workspace to switch between projects easily.

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
