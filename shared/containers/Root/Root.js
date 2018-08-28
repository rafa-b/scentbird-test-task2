import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/core'

import App from 'containers/App/App'


export default class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
