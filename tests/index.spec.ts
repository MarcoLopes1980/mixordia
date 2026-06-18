import { test, expect } from '@playwright/test';

test.describe('Contact Information', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the index.html file
    await page.goto('index.html');
  });

  test('should display the image', async ({ page }) => {
    const image = page.locator('img[src="image.png"]');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', 'Displayed PNG Image');
  });

  test('should display email address', async ({ page }) => {
    const email = page.locator('a[href="mailto:info@mixordia.pt"]');
    await expect(email).toBeVisible();
    await expect(email).toContainText('info@mixordia.pt');
  });

  test('should display phone number', async ({ page }) => {
    const phone = page.locator('a[href="tel:+351218008181"]');
    await expect(phone).toBeVisible();
    await expect(phone).toContainText('+351 21 800 8181');
  });

  test('should have contact card with proper labels', async ({ page }) => {
    // Check for Contact heading
    await expect(page.locator('h3')).toContainText('Contact');

    // Check for Email label
    const emailLabel = page.locator('text=Email account:');
    await expect(emailLabel).toBeVisible();

    // Check for Phone label
    const phoneLabel = page.locator('text=Phone number:');
    await expect(phoneLabel).toBeVisible();
  });

  test('should have all contact elements in correct order', async ({ page }) => {
    const contactCard = page.locator('aside[aria-label="Contact"]');
    await expect(contactCard).toBeVisible();

    // Verify the structure exists
    const heading = contactCard.locator('h3');
    await expect(heading).toContainText('Contact');

    // Verify email link is accessible
    const emailLink = contactCard.locator('a[href="mailto:info@mixordia.pt"]');
    await expect(emailLink).toBeVisible();

    // Verify phone link is accessible
    const phoneLink = contactCard.locator('a[href="tel:+351218008181"]');
    await expect(phoneLink).toBeVisible();
  });
});
