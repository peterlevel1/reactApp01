import { createClass } from 'react'

let ViewAside = createClass({
  mixins: [mixins],

  getDefaultProps() {
    return {
      rows: blockController.getContainerRows(
        I_ASIDE_ROWS,
        I_ASIDE_CELLS_EACH_ROW,
        configStyle.cell
      ),
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
        <ul>
          {this.getCells()}
        </ul>
      </div>
    )
  }
})

export default ViewAside
