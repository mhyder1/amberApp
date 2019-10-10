import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>

        <Link to='/idea-list'>
          <button>Return to Idea List</button>
        </Link>

        <Link to='/sign-in'>
          <button>Sign In</button>
        </Link>
      </div>
    )
  }
}