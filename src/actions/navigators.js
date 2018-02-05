// @flow

import { pages } from '../constants'

export type ActionNavigators = {
  type: 'NAVIGATE',
  page: string
}

export const navigateToStart = () => {
  const action: ActionNavigators = {
    type: 'NAVIGATE',
    page: pages.start,
  }
  return action
}

export const navigateToGame = () => {
  const action: ActionNavigators = {
    type: 'NAVIGATE',
    page: pages.game,
  }
  return action
}

export const navigateToLeaderboard = () => {
  const action: ActionNavigators = {
    type: 'NAVIGATE',
    page: pages.leaderboard,
  }
  return action
}
