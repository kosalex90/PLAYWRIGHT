import { test, expect } from '@playwright/test';


const userName = 'Name Test'
const userMail = 'test@mail.test'
const userMessage = 'This is test text'

test('@Spam W-Lease test spam', async ({ page }) => {

  await page.goto('https://demo-w-lease.newtribe.nl/en/contact');
  await page.pause()
  await page.locator('[placeholder="Name"]').click();
  await page.locator('[placeholder="Name"]').fill(userName);
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(userMail);
  await page.locator('[placeholder="Email"]').press('Tab');
  await page.locator('[placeholder="Your message"]').fill(userMessage);
  await page.locator('button:has-text("Send message")').click();
  await page.locator('text=Close message').click();



});