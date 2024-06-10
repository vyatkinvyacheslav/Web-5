const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, setDefaultTimeout } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

setDefaultTimeout(60000);
Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", {timeout:60000}, async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru${string}`);
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "div[class='a:nth-child(2) > span.page-nav__day-week'] input, string)
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "div[class='[data-seance-id='198']'] input, string)
});
 
Then("user sees the hall layout {string}", async function (string) {
  const actual = await getText(this.page, "https://qamid.tmweb.ru/client/hall.php");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "div[class='.buying-scheme__chair_standart'] input, string)
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "div[class='.acceptin-button'] input, string)
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "div[class='.acceptin-button'] input, string)
});

Then("user sees the QR code of e-ticket {string}", async function (string) {
  const actual = await getText(this.page, "https://qamid.tmweb.ru/client/ticket.php");
  const expected = await string;
  expect(actual).contains(expected);
});

