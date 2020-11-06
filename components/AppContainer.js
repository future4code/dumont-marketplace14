import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import SideColumn from './SideColumn/SideColumn'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SideColumn/>
      </div>
    )
  }
}
