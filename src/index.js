import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import studyCards from './reducers/StudyCards'
import FilmsReducer from './reducers/FilmsReducer'
import TokenReducer from './reducers/TokenReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loadState, saveState } from './helpers/localStorage'
const rootReducer = combineReducers({cards: studyCards, films: FilmsReducer, token: TokenReducer})

const loggerMiddleware = createLogger()

// persisting only the jwt token currently
const persistedState = loadState() || {}

let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.subscribe(() => {
   saveState({
    token: store.getState().token
  });
})

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
