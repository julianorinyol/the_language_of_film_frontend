const puppeteer = require('puppeteer');

describe('FilmsPage', () => {
  it('should show 2 film cards', async () => {
    let browser = await puppeteer.launch({
      headless: true
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitFor(1000)
    await page.waitForSelector('.FilmCard')
    let elems = await page.$$('.FilmCard')
    expect(elems.length).toEqual(2)

    browser.close();
  }, 16000);
});