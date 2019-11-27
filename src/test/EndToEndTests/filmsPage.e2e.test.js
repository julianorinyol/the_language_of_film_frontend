const puppeteer = require('puppeteer');
const url = process.env.REACT_APP_FRONT_END_URL
const headless = process.env.REACT_APP_END_TO_END_TESTS_HEADLESS 

describe('FilmsPage', () => {
  it('should show 2 film cards', async () => {
    const filmCardClass = '.FilmCard'
    let browser = await puppeteer.launch({
      headless
    });
    let page = await browser.newPage();

    await page.goto(url);
    await page.waitFor(1000)
    await page.waitForSelector(filmCardClass)
    let elems = await page.$$(filmCardClass)
    expect(elems.length).toEqual(2)

    browser.close();
  }, 16000);
});