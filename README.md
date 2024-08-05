# QuantumEye

QuantumEye is a User and Entity Behavior Analytics (UEBA) system using Next.js for the frontend and Django with Celery for the backend.

## Setup

1. Install Docker and Docker Compose
2. Clone this repository
3. Run `docker-compose up` to start all services
4. Access the frontend at `http://localhost:3000` and the backend at `http://localhost:8000`

## Development

This project uses VS Code DevContainers for development. To get started:

1. Install the Remote - Containers extension in VS Code
2. Open this project in VS Code
3. When prompted, click "Reopen in Container"
4. VS Code will build and start the development environment

## Project Structure

- `frontend/`: Next.js frontend application
- `backend/`: Django backend application
- `elasticsearch/`: Elasticsearch configuration
- `filebeat/`: Filebeat configuration for log shipping

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details