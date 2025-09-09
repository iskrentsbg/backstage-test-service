# Development Guide

## Local Development

### Prerequisites

- Node.js 18+
- Docker
- kubectl
- kind (for local Kubernetes)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iskrentsbg/backstage-test-service.git
   cd backstage-test-service
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The service will be available at `http://localhost:3000`.

## Project Structure

```
backstage-test-service/
├── docs/                 # Documentation files
├── .github/workflows/    # CI/CD workflows
├── Dockerfile           # Container configuration
├── index.js            # Main application file
├── package.json        # Node.js dependencies
├── catalog-info.yaml   # Backstage catalog entity
├── mkdocs.yml         # Documentation configuration
└── deploy.sh          # Deployment automation script
```

## Testing

### Local Testing

```bash
# Run the application
npm start

# Test endpoints
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/api/info
```

### Container Testing

```bash
# Build and test container
docker build -t backstage-test-service .
docker run -p 3000:3000 backstage-test-service

# Test containerized endpoints
curl http://localhost:3000/health
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. **Installs dependencies** using npm
2. **Runs tests** (when available)
3. **Builds the application**
4. **Creates Docker image** (on main branch)
5. **Pushes to Docker Hub** (on main branch)

### Workflow Triggers

- **Push to main**: Full build and deploy
- **Pull requests**: Build and test only
- **Manual dispatch**: On-demand execution

## Backstage Integration

The service integrates with Backstage through:

- **Catalog Entity**: `catalog-info.yaml` defines the service
- **GitHub Actions**: CI/CD visibility in Backstage UI
- **Container Registry**: Docker Hub integration
- **Kubernetes**: Multi-environment deployment tracking
- **TechDocs**: This documentation site

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

All changes are automatically tested through the CI/CD pipeline.
