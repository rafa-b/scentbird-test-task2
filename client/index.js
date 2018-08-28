import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'containers/Root/Root'


const render = () => (
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
)

render()
