import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './UserCard.scss'


@cssModules(styles)
export default class UserCard extends Component {

  render() {
    return (
      <div styleName="userCard">UserCard</div>
    )
  }
}
