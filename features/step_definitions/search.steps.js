const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 20000,
  });
});

When("user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});

const {Given, When, Then, Before, After} =
require('cucumber'); const puppeteer = require('puppeteer');
const expect = require('chai');

Given("user is on {string} page", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
  });
  When("user search by {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
  });
  Then("user sees the course suggested {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
  
});

Given("user is on {string} page", async function (string) { return await
  page.goto(`https://netology.ru${string}`);
  });
  When("user search by {string}", async function (string) { return await
  putText(page, "input", string);
  });
  Then("user sees the course suggested {string}", async function (string) { const actual
  = await getText(page, "a[data-name]"); expect(actual).contain(string);
});

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 }); const page
  = await browser.newPage();
  this.browser = browser; this.page =
  page;
  });
  After(async function () { if
  (this.browser) {
  await this.browser.close();
  }
  });
  

