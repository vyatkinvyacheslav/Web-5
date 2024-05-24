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
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru");
  });

  test("Mikki for saturday", async () => {
    const title = await page.title();
    await clickElement(page, "Сб");
    const title2 = await page.title();
    await clickElement(page, "198");
    const title3 = await page.title();
    await clickElement(page, "buying-scheme__chair buying-scheme__chair_standart");
    await clickElement(page, "Забронировать");
    const title4 = await page.title();
    await clickElement(page, "onclick");
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
   });

});


  //   const pageList = await browser.newPage();
  //   await pageList.goto("https://netology.ru/navigation");
  //   await pageList.waitForSelector("h1");
  // });

//   test("The first link text 'Медиа Нетологии'", async () => {
//     const actual = await getText(page, "header a + a");
//     expect(actual).toContain("Медиа Нетологии");
//   });

//   test("The first link leads on 'Медиа' page", async () => {
//     await clickElement(page, "header a + a");
//     const actual = await getText(page, ".logo__media");
//     await expect(actual).toContain("Медиа");
//   });
// });

// test("Should look for a course", async () => {
//   await page.goto("https://netology.ru/navigation");
//   await putText(page, "input", "тестировщик");
//   const actual = await page.$eval("a[data-name]", (link) => link.textContent);
//   const expected = "Тестировщик ПО";
//   expect(actual).toContain(expected);
// });

// test("Should show warning if login is not email", async () => {
//   await page.goto("https://netology.ru/?modal=sign_in");
//   await putText(page, 'input[type="email"]', generateName(5));
//});
