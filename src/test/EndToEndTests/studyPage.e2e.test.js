import { testApi, getPuppeteerOptions,  getClass } from '../config/testHelpers'
const puppeteer = require('puppeteer');
const getBrowser = () => puppeteer.launch(getPuppeteerOptions())  

const studyPageUrl = process.env.REACT_APP_FRONT_END_URL + '/study'

const studyPageClasses = require('../../components/StudyPage/StudyPage').classNames
const studyCardClasses = require('../../components/Card/Card').classNames

// todo: find a dynamic way to seed the test environment with shared sample data
// between back and front end repos
const sampleQuestionData = [
  {
    question: 'maldita',
    answer: 'verdammte -  german' // this is just part of the answer. using toContain
  },
  {
    question: 'verdammte',
    answer: 'damned -  english' // this is just part of the answer. using toContain
  },
]

var browser;

describe('StudyPage', () => {

  beforeAll(async () => {
    await testApi()
    browser = await getBrowser()
  })

  afterAll(async () => {
    browser.close();
  })

  it('should show the study card', async () => {

    const page = await browser.newPage();

    await page.goto(studyPageUrl, {
      waitUntil: 'networkidle2',
    });

    await page.waitForSelector(getClass(studyCardClasses.card))
    const elems = await page.$$(getClass(studyCardClasses.card))
    expect(elems.length).toEqual(1)
    
  }, 16000);

  it('should show question and display answer when clicked', async () => {
    
    const page = await browser.newPage();

    await page.goto(studyPageUrl, {
      waitUntil: 'networkidle2',
    });

    await page.waitForSelector(getClass(studyCardClasses.questionText))
    const elems = await page.$$(getClass(studyCardClasses.questionText))
    expect(elems.length).toEqual(1)
    const questionElement = elems[0]
    const questionText = await questionElement.getProperty('textContent').then(element => element.jsonValue());
    expect(questionText).toEqual(sampleQuestionData[0].question)

   
    await page.click(getClass(studyCardClasses.showAnswerButton))
    await page
    .waitForSelector(getClass(studyCardClasses.answerText)).then( async elem => {
      const text = await elem.getProperty('textContent').then(element => element.jsonValue());      
      expect(text).toContain(sampleQuestionData[0].answer)
    })
  }, 16000);

  describe('next and previous buttons', () => {
    it('should show the second question after the "next" button is clicked', async () => {
      
      const page = await browser.newPage();

      await page.goto(studyPageUrl, {
        waitUntil: 'networkidle2',
      });

      await page.click(getClass(studyPageClasses.nextButton))

      const elems = await page.$$(getClass(studyCardClasses.questionText))
      const questionElement = elems[0]

      const questionText = await questionElement.getProperty('textContent').then(element => element.jsonValue());
      expect(questionText).toEqual(sampleQuestionData[1].question)

     
      await page.click(getClass(studyCardClasses.showAnswerButton))
      
      await page
      .waitForSelector(getClass(studyCardClasses.answerText)).then( async elem => {
        const text = await elem.getProperty('textContent').then(element => element.jsonValue());      
        expect(text).toContain(sampleQuestionData[1].answer)
      })
    }, 16000);

    xit('should not show the "previous" button on the first question, nor the "next" button on the last', async () => {

    }, 16000)
  })
});