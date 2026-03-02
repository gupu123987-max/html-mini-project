# News Website - Docker Setup

This project is now containerized with Docker for easy development and deployment.

## Prerequisites

- Docker installed on your machine
- Docker Compose (included with Docker Desktop)

## Quick Start

### Development (with live reload)

```bash
docker-compose up
```

This will:
- Build the Docker image
- Start the container
- Serve the website on http://localhost:3000
- Enable live reload when files change

### Production

```bash
docker-compose up --build
```

## Docker Commands

### Build the image
```bash
docker build -t news-website .
```

### Run the container
```bash
docker run -p 3000:3000 news-website
```

### Stop all containers
```bash
docker-compose down
```

### View running containers
```bash
docker ps
```

**Container Name:** `3-web-1` (when using docker-compose)

## Project Structure

- `Dockerfile` - Container configuration
- `docker-compose.yml` - Development setup with volume mounting
- `.dockerignore` - Files to exclude from Docker context
- `package.json` - Node.js dependencies and scripts

## How it works

The Docker setup uses:
- **Node.js 18 Alpine** as the base image for a lightweight container
- **http-server** to serve the static website
- **Volume mounting** in development to enable live reload
- **Port 3000** exposed for web access

The container serves your news website and makes it accessible at http://localhost:3000.