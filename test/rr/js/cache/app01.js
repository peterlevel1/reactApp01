import React, { createClass, Component } from 'react'
import { render } from 'react-dom'
import CSS from '../css/app.less'

let assign = Object.assign

let getId = (() => {
  let id = -1
  return () => {
    id++
    return id + ''
  }
})()

const I_GAP = 10
const I_CELL_WIDTH = 50
const I_CELL_HEIGHT = I_CELL_WIDTH
const I_CELL_BORDER_RADIUS = 5

// main
const I_MAIN_ROWS = 10
const I_MAIN_CELLS_EACH_ROW = 10

const I_MAIN_ROW_WIDTH = (I_CELL_WIDTH + I_GAP) * I_MAIN_CELLS_EACH_ROW
const I_MAIN_ROW_HEIGHT = I_CELL_HEIGHT + I_GAP

const I_MAIN_WIDTH = I_MAIN_ROW_WIDTH
const I_MAIN_HEIGHT = I_MAIN_ROW_HEIGHT * I_MAIN_ROWS

// aside
const I_ASIDE_ROWS = 4
const I_ASIDE_CELLS_EACH_ROW = 4

const I_ASIDE_ROW_WIDTH = (I_CELL_WIDTH + I_GAP) * I_ASIDE_CELLS_EACH_ROW
const I_ASIDE_ROW_HEIGHT = I_CELL_HEIGHT + I_GAP

const I_ASIDE_WIDTH = I_ASIDE_ROW_WIDTH
const I_ASIDE_HEIGHT = I_ASIDE_ROW_HEIGHT * I_ASIDE_ROWS

let configStyle = {
  cell: {
    width: I_CELL_WIDTH,
    height: I_CELL_HEIGHT,
    borderRadius: I_CELL_BORDER_RADIUS,
    marginLeft: I_GAP,
    //position: 'absolute',
    //left: 0,
    //top: I_GAP,
    backgroundColor: '#BF0349'
  },
  row: {
    paddingTop: I_GAP,

    //height: I_CELL_HEIGHT + I_GAP,
    //position: 'absolute',
    //left: 0,
    //top: 0
  }
}

// 1. according to ViewActiveBlock start pos
// 2. start pos is dynamic
let configShape = {
  // 0:
  gun: {
    style: {
      backgroundColor: '#ff0'
    },
    blocks: [
      // shape 0
      [
        // each row and cells
        [1, 1, 1, 1]
      ],
      // shape 1
      [
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1]
      ]
    ]
  }
}

/**
 *
 */
let blockController = {

  getContainerRows(lenRows, lenCells, defaultStyle) {
    let row, rows = [], style

    for (let i = 0, ii = lenRows; i < ii; i++) {
      row = []
      for (let k = 0, kk = lenCells; k < kk; k++) {
        style = assign({}, defaultStyle || {})
        row.push([i, k, { occupied: false, style: style }])
      }
      rows.push(row)
    }

    return rows
  },

  /**
   * @param {Array} targetCoor contains those to be tested cells coordinates
   * @param {Array} coors contains cells coordinates which already exists
   * @returns {Boolean} true: collision happen, false: no collision
   */
  testCollision(targetCoor = [], coors = []) {
    if (!coors.length) {
      return false
    }

  },

  getPosition({start, coordinates}) {
    //[
    //  // each row and cells
    //  [1, 1, 1, 1]
    //],

    let row, cellX, cellY, eachRow = [], rows = []

    for (let i = 0, ii = coordinates.length; i < ii; i++) {
      row = coordinates[i]
      cellY = start[1] + i
      eachRow = []

      for (let k = 0, kk = row.length; k < kk; k++) {
        cellX = row[k]

        if (cellX === 0) continue
        cellX = start[0] + k

        eachRow.push([cellX, cellY])
      }

      rows.push(eachRow)
    }

    return rows
  },

  /**
   *
   */
  getRandomBlock(start) {
    // debugger;
    let keys = Object.keys(configShape);
    let indexRandom = Math.floor(Math.random() * keys.length)
    let keyRandom = keys[indexRandom]

    let shape = configShape[keyRandom]
    let blocks = shape.blocks

    let indexCoordinatesRandom = Math.floor(Math.random() * blocks.length)
    let coordinates = blocks[indexCoordinatesRandom]

    let position = blockController.getPosition({
      start: start,
      coordinates: coordinates
    })

    return {
      start: start,
      coordinates: coordinates,
      position: position,
      style: shape.style,
      shape: shape,
      index: indexCoordinatesRandom
    }
  },

  eachRowAndCell(rows, rowCb, cellCb) {
    let row, cell

    for (let i = 0, ii = rows.length; i < ii; i++) {
      row = rows[i]
      if (rowCb) rowCb(row)

      for (let k = 0, kk = row.length; k < kk; k++) {
        cell = row[k]
        if (cellCb) cellCb(cell)
      }
    }
  },

  eachCell(rows, cb) {
    let row, cell

    for (let i = 0, ii = rows.length; i < ii; i++) {
      row = rows[i]

      for (let k = 0, kk = row.length; k < kk; k++) {
        cell = row[k]

        cb(cell)
      }
    }
  },

  clearBlockData(rows, block) {
    let row, cell, data
    let targetRow, targetCell, targetRows = block.position
    let style = { backgroundColor: configStyle.cell.backgroundColor }
    //debugger;
    for (let i = 0, ii = targetRows.length; i < ii; i++) {
      targetRow = targetRows[i]
      row = null
      for (let k = 0, kk = targetRow.length; k < kk; k++) {
        targetCell = targetRow[k]
        row = row || rows[targetCell[1]]
        cell = row[targetCell[0]]
        if (!cell) throw new Error('no cell')

        data = cell[2]
        if (!data) throw new Error('no data with cell[2]')

        if (!data.occupied) throw new Error('cell should be occupied')

        data.occupied = false
        assign(data.style, style)
      }
    }
  },

  setBlockData(rows, block) {
    //let rows = configAside.rows
    //let block = blockController.getRandomBlock()

    let row, cell, data
    let targetRow, targetCell, targetRows = block.position
    let style = block.style
    //debugger;
    for (let i = 0, ii = targetRows.length; i < ii; i++) {
      targetRow = targetRows[i]
      row = null
      for (let k = 0, kk = targetRow.length; k < kk; k++) {
        targetCell = targetRow[k]
        row = row || rows[targetCell[1]]
        cell = row[targetCell[0]]
        if (!cell) throw new Error('no cell')

        data = cell[2]
        if (!data) throw new Error('no data with cell[2]')

        if (data.occupied) throw new Error('cell should not be occupied')

        data.occupied = true
        assign(data.style, style)
      }
    }
  },

  testCollision(rows, block) {
    let row, cell, data
    let targetRow, targetCell, targetRows = block.position
    //debugger;
    for (let i = 0, ii = targetRows.length; i < ii; i++) {
      targetRow = targetRows[i]
      row = null
      for (let k = 0, kk = targetRow.length; k < kk; k++) {
        targetCell = targetRow[k]
        row = row || rows[targetCell[1]]
        cell = row[targetCell[0]]
        if (!cell) throw new Error('no cell')

        data = cell[2]
        if (!data) throw new Error('no data with cell[2]')

        if (data.occupied) return true
      }
    }

    return false
  },

  getCells(rows) {
    let jsxRows = [], jsxRow
    let row, cell

    for (let i = 0, ii = rows.length; i < ii; i++) {
      row = rows[i]
      jsxRow = []

      for (let k = 0, kk = row.length; k < kk; k++) {
        cell = row[k]
        jsxRow.push(<li className="block-cell" style={cell[2].style} key={getId()}></li>)
      }

      jsxRows.push(
        <ul className="block-row" style={{paddingTop: I_GAP}} key={getId()}>
          {jsxRow}
        </ul>
      )
    }

    return jsxRows
  },

  getShapeNextBlockData(block) {
    let nextIndex = block.index + 1
    if (nextIndex === block.shape.blocks.length) nextIndex = 0
    return {
      index: nextIndex,
      coordinates: block.shape.blocks[nextIndex]
    }
  }
}

let ViewHeader = createClass({
  render() {
    return (
      <header className="view-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
})

let configMain = {
  start: [(I_MAIN_CELLS_EACH_ROW / 2) - 1, 0]
}

let configAside = {
  start: [0, 0]
}

let mixins = {
  setBlockData() {
    if (!this.props.block) return;

    blockController.setBlockData(
      this.props.rows,
      this.props.block
    )
  },

  clearBlockData() {
    if (!this.props.block) return;

    blockController.clearBlockData(
      this.props.rows,
      this.props.block
    )
  },

  getCells() {
    return blockController.getCells(this.props.rows)
  }
}

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
