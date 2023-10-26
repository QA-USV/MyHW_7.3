/* eslint-disable linebreak-style */

const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const {
  email,
  wrongEmail,
  password,
  wrongPassword,
  userInitials,
} = require("../user");

test("testSuccessAuthorization", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.screenshot({ path: "scrShotSuccessAuth_1.png" });
  await page.getByPlaceholder("email").fill(email);
  await page.screenshot({ path: "scrShotSuccessAuth_2.png" });
  await page.getByPlaceholder("Пароль").fill(password);
  await page.screenshot({ path: "scrShotSuccessAuth_3.png" });
  await page.getByTestId("login-submit-btn").click();
  const checkAuth = page.getByTestId("menu-userface");
  await expect(checkAuth).toHaveText(userInitials);
  await checkAuth.click();
  await page.screenshot({ path: "scrShotSuccessAuth_4.png" });
  await browser.close();
});

test("testAuthorizationWrongPassword", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.getByPlaceholder("email").fill(email);
  await page.getByPlaceholder("Пароль").fill(wrongPassword);
  await page.getByTestId("login-submit-btn").click();
  const checkAuth = page.getByTestId("login-error-hint");
  await expect(checkAuth).toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "scrShotWrongPassword.png" });
  await browser.close();
});

test("testAuthorizationWrongEmail", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.getByPlaceholder("email").fill(wrongEmail);
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  const checkAuth = page.getByTestId("login-error-hint");
  await expect(checkAuth).toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "scrShotWrongEmail.png" });
  await browser.close();
});
