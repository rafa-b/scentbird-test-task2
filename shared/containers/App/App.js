import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeName }  from 'redux/actions/user'

import UserCard from 'components/UserCard/UserCard'

import './App.scss'


@connect((state) => ({
  name: state.user.name,
}), { changeName })
export default class App extends Component {

  handleClick = () => {
    const { changeName } = this.props

    changeName('Vasya')
  }

  render() {
    const { name } = this.props

    return (
      <Fragment>
        Name: {name}
        <button onClick={this.handleClick}>Change name</button>
        <UserCard />
      </Fragment>
    )
  }
}
