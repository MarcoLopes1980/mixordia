# Mixordia - Contact Information Tests

This project includes automated tests using Playwright to verify that contact information (image, email, and phone number) is properly displayed on the website.

## Setup

1. Install dependencies:
```bash
npm ci
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Debug tests
```bash
npm run test:debug
```

## Tests

The test suite checks for:
- ✓ Image display (image.png with correct alt text)
- ✓ Email address visibility (info@mixordia.pt)
- ✓ Phone number visibility (+351 21 800 8181)
- ✓ Contact card labels and structure
- ✓ Proper accessibility attributes

## CI/CD Integration

Tests automatically run on GitHub Actions when you:
- Push to `main`, `master`, or `develop` branches
- Create a pull request targeting those branches

The workflow:
1. Installs dependencies
2. Installs Playwright browsers
3. Runs all tests across Chromium, Firefox, and WebKit
4. Uploads the test report as an artifact

## Test Report

After tests run, the HTML report is available in the `playwright-report/` directory. In GitHub Actions, the report is automatically uploaded as an artifact.
