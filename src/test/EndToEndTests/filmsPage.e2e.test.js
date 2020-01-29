const url = process.env.REACT_APP_FRONT_END_URL
import { testApi, getPuppeteerOptions } from '../config/testHelpers'

const puppeteer = require('puppeteer');
const getBrowser = () => puppeteer.launch(getPuppeteerOptions())  
 

let browser;
describe('FilmsPage', () => {

  beforeAll(async () => {
    await testApi()
    browser = await getBrowser()
  })

  afterAll(async () => {
    browser.close();
  })

  it('should show 2 film cards', async () => {
    const filmCardClass = '.FilmCard'
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitFor(1000)
    await page.waitForSelector(filmCardClass)
    const elems = await page.$$(filmCardClass)
    expect(elems.length).toEqual(2)

  }, 16000);
});