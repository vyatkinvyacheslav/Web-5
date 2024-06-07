const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
page.close();
});

describe("qamid.tmweb.ru tests", () => {
  beforeEach(async () => {
    await page.goto("https://qamid.tmweb.ru");
  });

  test("Let's see Mikki tomorrow", async () => {
    const title = await page.title();
    await clickElement(page, "a:nth-child(2) > span.page-nav__day-week");
    await clickElement(page, "[data-seance-id='198']");
    await clickElement(page, ".buying-scheme__chair_standart");
    await clickElement(page, ".acceptin-button");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
   });

   test("Let's see Stalker in 3 day", async () => {
    const title = await page.title();
    await clickElement(page, "a:nth-child(4) > span.page-nav__day-week");
    await clickElement(page, "[data-seance-id='217']");
    await clickElement(page, ".buying-scheme__chair_standart");
    await clickElement(page, ".acceptin-button");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
   });

   test("Let's see Mikki tomorrow but there are no places(sad path)", async () => {
    const title = await page.title();
    await clickElement(page, "a:nth-child(2) > span.page-nav__day-week");
    await clickElement(page, "[data-seance-id='198']");
    await clickElement(page, ".buying-scheme__chair_disabled");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Микки маус");
   });

  });