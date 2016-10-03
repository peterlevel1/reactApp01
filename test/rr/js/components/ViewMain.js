import { createClass } from 'react'

let ViewMain = createClass({
  mixins: [mixins],

  getInitialState() {
    return {
      isMove: false,
      isOver: false
    }
  },

  getDefaultProps() {
    return {
      rows: blockController.getContainerRows(
        I_MAIN_ROWS,
        I_MAIN_CELLS_EACH_ROW,
        configStyle.cell
      ),
      block: null
    }
  },

  testCollision(start) {
    if (!this.props.block) return false

    this.clearBlockData()

    let nextBlockPosition = blockController.getPosition({
      start: start,
      coordinates: coordinates
    })

    let ret = blockController.testCollision(
      this.props.rows,
      nextBlockPosition
    )

    this.setBlockData()

    return ret
  },

  componentWillReceiveProps(nextProps) {
    this.clearBlockData()
    this.setState({
      isMove: !this.testCollision(nextProps.start)
    })
  },

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isMove
  },

  render() {
    this.setBlockData()

    return (
      <div className="view-main">
        <ul>
          {this.getCells()}
        </ul>
      </div>
    )
  }
})

export default ViewMain
