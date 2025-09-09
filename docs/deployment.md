# Deployment Guide

## Container Deployment

The service is containerized using Docker and deployed across multiple environments.

### Docker Image

- **Registry**: Docker Hub
- **Image**: `iskrents/backstage-test-service:latest`
- **Base**: Node.js 18 Alpine

### Build Process

```bash
# Build the Docker image
docker build -t iskrents/backstage-test-service:latest .

# Push to registry
docker push iskrents/backstage-test-service:latest
```

## Kubernetes Deployment

The service is deployed to three environments with different configurations:

### Development Environment
- **Namespace**: `dev`
- **Replicas**: 1
- **Environment**: `NODE_ENV=development`

### Test Environment
- **Namespace**: `test`
- **Replicas**: 2
- **Environment**: `NODE_ENV=test`

### Production Environment
- **Namespace**: `prod`
- **Replicas**: 3
- **Environment**: `NODE_ENV=production`

## GitOps with Argo CD

Deployments are managed through GitOps using Argo CD:

1. **Manifests Repository**: Contains Kubernetes YAML files
2. **Environment Folders**: `env/dev`, `env/test`, `env/prod`
3. **Auto-sync**: Enabled for dev/test environments
4. **Manual Sync**: Required for production deployments

### Deployment Process

1. Update container image tag in manifest files
2. Commit changes to manifests repository
3. Argo CD detects changes and syncs automatically (dev/test)
4. Manual approval required for production deployments

## Monitoring

- **Health Checks**: `/health` endpoint
- **Kubernetes Probes**: Liveness and readiness probes configured
- **Argo CD Dashboard**: Monitor sync status and application health
