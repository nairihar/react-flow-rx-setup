// @flow

import { pages } from '../constants'

import type { ActionNavigators } from '../actions/navigators'

const State: string = pages.start

export default function navigators(state: string = State, action: ActionNavigators): string {
  switch (action.type) {
    case 'NAVIGATE':
      return action.page
    default:
      return state
  }
}
