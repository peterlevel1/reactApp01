import { createClass } from 'react'

let ViewAside = createClass({
  mixins: [mixins],

  getDefaultProps() {
    return {
      config: null,
      rows: null,
      block: null,
      points: null
    }
  },

  componentWillReceiveProps() {
    this.clearBlockData()
  },

  render() {

    this.setBlockData()

    return (
      <div className="view-aside">
        <header>
          <h1>分数: {this.props.points}</h1>
        </header>
        <section>
          {this.getRenderRows()}
        </section>
      </div>
    )
  }
})

export default ViewAside
