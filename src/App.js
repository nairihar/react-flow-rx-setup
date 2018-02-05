// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import type { Store } from 'redux'
import type { EpicMiddleware } from 'redux-observable'

import epics from './epics'
import reducers from './reducers'

import Main from './components/Main'


const epicMiddleware: EpicMiddleware<*, *> = createEpicMiddleware(epics)

const store: Store<*, *> = createStore(
  reducers,
  applyMiddleware(epicMiddleware),
)

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
)
