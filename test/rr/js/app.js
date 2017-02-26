import React, { createClass } from 'react'
import { render } from 'react-dom'
import ViewHeader from './components/ViewHeader'
import ViewContent from './components/ViewContent'
// may vary according to different levels
import configBlock from './configs/block'
import CSS from '../css/app.less'

let App = createClass({
  render() {
    return (
      <div className="app-container">
        <ViewHeader
          title="Russia Rock"/>
        <ViewContent
          config={configBlock}/>
      </div>
    )
  }
})

render(<App/>, document.querySelector('#app'))
