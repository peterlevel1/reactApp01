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
      config: null,
      rows: null,
      block: null,
      direction: null
    }
  },

  testCollision(start, coordinates) {
    if (!this.props.block) return false

    this.clearBlockData()

    let nextBlockPosition = blockController.getPosition(
      start,
      coordinates
    )

    let ret = blockController.testCollision(
      this.props.rows,
      { position: nextBlockPosition }
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
        <section>
          {this.getRenderRows()}
        </section>
      </div>
    )
  }
})

export default ViewMain
