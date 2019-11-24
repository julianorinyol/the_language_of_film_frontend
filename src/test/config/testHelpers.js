import React from 'react';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

export const createMockStore = (store) => {
  const middlewares = [thunk]
  return configureMockStore(middlewares)(store)
}

export const wrapComponentInProvider = (component, store) => (
    <Provider store={createMockStore(store)}>
      { component }
    </Provider>
)