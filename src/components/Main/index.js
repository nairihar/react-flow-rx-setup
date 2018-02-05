// @flow

import React, { Component } from 'react'

export default class Main extends Component<{}> {
  componentWillMount() {
    // @TODO remvoe
    this.setState(null)
  }
  render() {
    return (
      <h1>Hello</h1>
    )
  }
}
