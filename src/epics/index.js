// @flow

import { combineEpics } from 'redux-observable'

import type { Epic } from 'redux-observable'

const epics: Epic<*, *, *> = combineEpics()

export default epics
