import React, { createClass, Component } from 'react'
import { render } from 'react-dom'
import CSS from '../css/app.less'

let App = createClass({
  render() {
    return (
      <div className="app-container">
        <ViewHeader title="Russia Rock"/>
        <ViewContent/>
      </div>
    )
  }
})

render(<App/>, document.querySelector('#app'))
