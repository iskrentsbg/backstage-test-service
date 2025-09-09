const { test, expect } = require('@playwright/test');

test.describe('Backstage Test Service UI', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Backstage Test Service/);
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'test-results/homepage.png' });
  });

  test('should display service information', async ({ page }) => {
    await page.goto('/');
    
    // Check for key elements that should be present
    await expect(page.locator('body')).toContainText('Backstage Test Service');
    
    // Verify the page responds within reasonable time
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000); // Should load within 5 seconds
  });

  test('should handle navigation and links', async ({ page }) => {
    await page.goto('/');
    
    // Test that the page is accessible and responsive
    const response = await page.goto('/health');
    expect(response.status()).toBe(200);
    
    // Take screenshot of health endpoint
    await page.screenshot({ path: 'test-results/health-page.png' });
  });
});
