import { createClass } from 'react'

let ViewContent = createClass({
  getDefaultProps() {
    return {
      timer: null,
      interval: 1000
    }
  },

  getInitialState() {
    return {
      points: 0,
      mainBlock: null,
      asideBlock: null,
      direction: 'down',
      mainStart: []
    }
  },

  componentWillMount() {
    this.setState({
      asideBlock: this.getAsideBlock(),
      mainBlock: null,
      mainStart: configMain.start.slice()
    })
  },

  getMainBlock() {
    return assign({}, this.state.asideBlock, {
      start: configMain.start.slice(),
      position: blockController.getPosition({
        start: configMain.start.slice(),
        coordinates: this.state.asideBlock.coordinates
      })
    })
  },

  getAsideBlock() {
    return blockController.getRandomBlock(configAside.start.slice())
  },

  getMainBlockMoveData(direction) {
    if (!this.state.mainBlock) return;

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
        let data = blockController.getShapeNextBlockData(block)
        coordinates = data.coordinates
        index = data.index
        break;
    }

    return {
      index: index,
      start: start,
      coordinates: coordinates
    }
  },

  componentDidMount() {
    this.timer = setInterval(() => {
      if (!this.state.mainBlock) {
        this.setState({
          asideBlock: this.getAsideBlock(),
          mainBlock: this.getMainBlock()
        })
      }
    }, this.props.interval)
  },

  render () {
    return (
      <div className="view-content">
        <ViewMain
          moveData={this.getMainBlockMoveData()}
          start={this.state.mainStart}
          direction={this.state.direction}
          block={this.state.mainBlock}/>
        <ViewAside
          points={this.state.points}
          block={this.state.asideBlock}/>
      </div>
    )
  }
})

export default ViewContent
