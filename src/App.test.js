import React from 'react';
import App from './App';
import { mount, shallow } from './test/config/enzyme'
import {createMockStore, wrapComponentInProvider} from './test/config/testHelpers'

const store = {}

const mockStore = createMockStore(store)

describe('<App />', () => {  
  it('should mount', () => {
    const wrap = shallow(
      wrapComponentInProvider(
        <App />, 
        mockStore
      )
    )
    expect(wrap.exists()).toBeTruthy()
  })
})
