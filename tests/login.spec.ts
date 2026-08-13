import { test, expect } from '@playwright/test';
// Imports Playwright's two main utilities:
// test   → used to define and run a test
// expect → used to write assertions/validations

test('login to sauchdemo app', async ({ page }) => {
// test() defines a Playwright test case.
// 'login to sauchdemo app' → name/description of the test.
// async → allows us to use 'await' for asynchronous Playwright operations.
// { page } → Playwright provides a Page object through the test fixture.
// Think of 'page' roughly like Selenium's WebDriver/browser tab.

    await page.goto('https://www.saucedemo.com/');
    // Opens the SauceDemo website.
    // goto() navigates the browser to the specified URL.
    // await means: wait until Playwright completes this navigation action.

    await page.fill('#user-name', 'standard_user');
    // Finds the username input using the CSS selector '#user-name'.
    // #user-name means: element whose id="user-name".
    // fill() clears the existing value and enters 'standard_user'.
    // await waits for the action to complete.

    await page.fill('#password', 'secret_sauce');
    // Finds the password input using '#password'.
    // Enters the password 'secret_sauce'.
    // fill() automatically handles clearing and entering the value.

    await page.click('#login-button');
    // Finds the Login button using '#login-button'.
    // click() performs the click action.
    // Playwright automatically waits for the element to be ready before clicking.

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // Assertion: verifies that the browser is now on the inventory page.
    // page represents the current browser page.
    // toHaveURL() checks the current URL.
    // If the URL matches → test passes.
    // If it doesn't match → test fails.
    // Playwright automatically waits for the expected URL.

});
// Ends the test case.