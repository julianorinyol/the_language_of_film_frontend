import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { saveState, loadState }  from './helpers/localStorage'
import throttle from 'lodash/throttle';
import studyCards from './reducers/StudyCards'
import FilmsReducer from './reducers/FilmsReducer'
import { combineReducers } from 'redux'

const persistedState = loadState()
const rootReducer = combineReducers({cards: studyCards, films: FilmsReducer})

let store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
  saveState( store.getState() );
}, 1000));

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
