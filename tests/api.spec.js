const { test, expect } = require('@playwright/test');

test.describe('Backstage Test Service API', () => {
  test('should return welcome message on root endpoint', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('message');
    expect(data.message).toContain('Hello from Backstage Test Service');
    expect(data).toHaveProperty('timestamp');
  });

  test('should return health status', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('status', 'healthy');
    expect(data).toHaveProperty('uptime');
    expect(data).toHaveProperty('timestamp');
    expect(typeof data.uptime).toBe('number');
  });

  test('should return service info', async ({ request }) => {
    const response = await request.get('/api/info');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('name', 'backstage-test-service');
    expect(data).toHaveProperty('version', '1.0.0');
    expect(data).toHaveProperty('environment');
    expect(data).toHaveProperty('node_version');
  });

  test('should return 404 for non-existent endpoint', async ({ request }) => {
    const response = await request.get('/non-existent');
    expect(response.status()).toBe(404);
  });

  test('should have correct response headers', async ({ request }) => {
    const response = await request.get('/');
    expect(response.headers()['content-type']).toContain('application/json');
  });
});
