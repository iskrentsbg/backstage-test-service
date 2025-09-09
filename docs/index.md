# Backstage Test Service

Welcome to the documentation for the Backstage Test Service - a demonstration Node.js service showcasing Backstage integration capabilities.

## Overview

This service demonstrates:
- **CI/CD Integration** with GitHub Actions
- **Container Deployment** with Docker Hub
- **Kubernetes Orchestration** across multiple environments
- **GitOps Workflow** with Argo CD

## Quick Start

The service exposes the following endpoints:

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api/info` - Service information

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Development   │    │      Test       │    │   Production    │
│   Environment   │    │   Environment   │    │   Environment   │
│   (1 replica)   │    │   (2 replicas)  │    │   (3 replicas)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │    Argo CD      │
                    │   GitOps        │
                    └─────────────────┘
```

## Links

- [Source Code](https://github.com/iskrentsbg/backstage-test-service)
- [Docker Image](https://hub.docker.com/r/iskrents/backstage-test-service)
- [CI/CD Pipeline](https://github.com/iskrentsbg/backstage-test-service/actions)
