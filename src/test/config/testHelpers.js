import React from 'react';
const axios = jest.requireActual('axios'); // because of __mocks__ directory
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const puppeteer = require('puppeteer');
const headless = (process.env.REACT_APP_END_TO_END_TESTS_HEADLESS === 'true')
const puppeteerDelay = parseInt(process.env.REACT_APP_PUPPETEER_DELAY) // in milliseconds

const puppeteerOptions = {
  headless,
  slowMo: puppeteerDelay
}

export const createMockStore = (store) => {
  const middlewares = [thunk]
  return configureMockStore(middlewares)(store)
}

export const wrapComponentInProvider = (component, store) => (
    <Provider store={createMockStore(store)}>
      { component }
    </Provider>
)

const backendStatusUrl = process.env.REACT_APP_BACK_END_STATUS_URL
export const testApi = () => {
  return axios.get(backendStatusUrl).catch(err => {
    throw new Error(`Backend API not responding. ${err.message}`)
  })
}


export const getPuppeteerOptions = () => puppeteerOptions

export const getBrowser = () => {
    return puppeteer.launch(puppeteerOptions);	
}


export const getClass = klass => `.${klass}`