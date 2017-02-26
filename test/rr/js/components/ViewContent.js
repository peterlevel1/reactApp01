import { createClass } from 'react'
import { assign } from '../lib/util'
import blockController from '../lib/blockController'

let ViewContent = createClass({
  getDefaultProps() {
    return {
      timer: null,
      // will receive from parent component
      config: null
    }
  },

  getInitialState() {
    return {
      points: 0,
      mainBlock: null,
      asideBlock: null,
      direction: 'down'
    }
  },

  componentWillMount() {
    this.setState({
      asideBlock: this.getAsideBlock(),
      mainBlock: null
    })
  },
 
  componentDidMount() {
    this.timer = setInterval(() => {
      if (!this.state.mainBlock) {
        this.setState({
          asideBlock: this.getAsideBlock(),
          mainBlock: this.getMainBlock()
        })
      }
    }, this.props.config.interval)

    document.addEventListener('keydown', (e) => {
      console.log('keydown', e.which)
    }, false)

    document.addEventListener('keyup', (e) => {
      console.log('keyup', e.which)
    }, false)
  },

  getMainBlock() {
    let start = this.props.config.viewMain.start.slice()

    return assign({}, this.state.asideBlock, {
      start: start.slice(),
      position: blockController.getPosition(
        start.slice(),
        this.state.asideBlock.coordinates
      )
    })
  },

  getAsideBlock() {
    return blockController.getRandomBlock(this.props.config.viewAside.start.slice())
  },

  getTestMoveBlockData(direction) {
    if (!this.state.mainBlock) return

    let start
    let block = this.state.mainBlock
    let coordinates = block.coordinates
    let index = block.index
    switch (direction) {
      case 'down':
        start = [block.start[0], block.start[1] + 1]
        break;
      case 'left':
        start = [block.start[0] - 1, block.start[1]]
        break;
      case 'right':
        start = [block.start[0] + 1, block.start[1]]
        break;
      case 'up':
        start = [block.start[0], block.start[1]]
        let data = blockController.getNextBlockData(block)
        coordinates = data.coordinates
        index = data.index
        break;
    }

    return {
      direction: direction,
      index: index,
      start: start,
      coordinates: coordinates
    }
  },

  render () {
    // testMoveBlockData={this.getTestMoveBlockData()}
    let config = this.props.config
    return (
      <div className="view-content">
        <ViewMain
          config={this.props.config.viewMain}
          direction={this.state.direction}
          rows={blockController.getContainerRows(config.viewMain.rows, config.viewMain.cellsEachRow)}
          block={this.state.mainBlock}/>
        <ViewAside
          config={this.props.config.viewAside}
          points={this.state.points}
          rows={blockController.getContainerRows(config.viewAside.rows, config.viewAside.cellsEachRow)}
          block={this.state.asideBlock}/>
      </div>
    )
  }
})

export default ViewContent
