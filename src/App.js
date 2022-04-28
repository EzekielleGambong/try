import React, { Component } from 'react'
import Navbar from './Navbar'
import Featured from './Featured'
import Slides from './Slides'

export class App extends Component{
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Featured/>
        <Slides/>
      </div>

    )
  }
}

export default App;
