# API Reference

## Endpoints

### GET /

Returns a welcome message from the service.

**Response:**
```json
{
  "message": "Hello from Backstage Test Service!",
  "timestamp": "2025-09-09T13:00:00.000Z"
}
```

### GET /health

Health check endpoint for monitoring and load balancers.

**Response:**
```json
{
  "status": "healthy",
  "uptime": 12345,
  "timestamp": "2025-09-09T13:00:00.000Z"
}
```

### GET /api/info

Returns service information and metadata.

**Response:**
```json
{
  "name": "backstage-test-service",
  "version": "1.0.0",
  "environment": "production",
  "node_version": "18.20.0"
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `404` - Not Found
- `500` - Internal Server Error

Error responses follow this format:
```json
{
  "error": "Error message",
  "timestamp": "2025-09-09T13:00:00.000Z"
}
```
