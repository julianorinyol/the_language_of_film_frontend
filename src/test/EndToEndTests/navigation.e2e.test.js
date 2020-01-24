import { getClass } from '../config/testHelpers'
import axios from 'axios'

const puppeteer = require('puppeteer');
const url = process.env.REACT_APP_FRONT_END_URL
const navigationClasses = require('../../components/Navigation/Navigation').classNames

const headless = (process.env.REACT_APP_END_TO_END_TESTS_HEADLESS === 'true')
const puppeteerDelay = parseInt(process.env.REACT_APP_PUPPETEER_DELAY) // in milliseconds

const puppeteerOptions = {
  headless,
  slowMo: puppeteerDelay
}

var browser;

describe('Navigation', () => {
  beforeAll(async () => {
    await axios.get(url)
    .catch(err => {
      throw new Error(`Server not running: ${err.message}`)
    })

    console.log('puppeteer options:', puppeteerOptions )
    browser = await puppeteer.launch(puppeteerOptions);
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