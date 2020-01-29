import { getClass, testApi, getPuppeteerOptions } from '../config/testHelpers'
const puppeteer = require('puppeteer');
const getBrowser = () => puppeteer.launch(getPuppeteerOptions())  

const url = process.env.REACT_APP_FRONT_END_URL
const navigationClasses = require('../../components/Navigation/Navigation').classNames

var browser;

describe('Navigation', () => {
  beforeAll(async () => {
    await testApi()

    browser = await getBrowser()
  })

  afterAll(async () => {
    browser.close();
  })

  it('should display links', async () => {
    const page = await browser.newPage();
    const navigationTabClass = getClass(navigationClasses.navigationTab)
    await page.goto(url);
    await page.waitForSelector(navigationTabClass)

    const elems = await page.$$(navigationTabClass)
    expect(elems.length).toEqual(4)
  }, 16000);
});