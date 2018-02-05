// @flow

import { combineReducers } from 'redux'

import type { Reducer } from 'redux'

import navigators from './navigators'

const reducers: Reducer<*, *> = combineReducers({
  navigators,
})

export default reducers
