import { createClass } from 'react'

let ViewHeader = createClass({
  render() {
    return (
      <header className="view-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
})
