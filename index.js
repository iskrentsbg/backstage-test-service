const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Backstage Test Service!', 
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'backstage-test-service',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version
  });
});

app.listen(port, () => {
  console.log(`Backstage Test Service running on port ${port}`);
  console.log(`Health check available at http://localhost:${port}/health`);
});
