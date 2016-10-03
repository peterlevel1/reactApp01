import React, { createClass, Component } from 'react'
import { render } from 'react-dom'
import CSS from '../css/app.less'

const I_ROWS = 5
const I_CELLS_EACH_ROW = 10
const I_CELL_WIDTH = 50
const I_CELL_HEIGHT = I_CELL_WIDTH
const I_GAP = 10

let configStyle = {
  cell: {
    width: I_CELL_WIDTH,
    height: I_CELL_HEIGHT,
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    top: I_GAP,
    backgroundColor: '#BF0349'
  },
  row: {
    height: I_CELL_HEIGHT + I_GAP,
    position: 'absolute',
    left: 0,
    top: 0
  }
}

let assign = Object.assign

let getId = (() => {
  let id = -1
  return () => {
    id++
    return id + ''
  }
})()

let ViewHeader = createClass({
  render() {
    return (
      <header className="app-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
})

let ViewContent = createClass({
  render () {
    return (
      <div className="app-content">
        <ViewContentBackgroundBlocks/>
        <ViewActiveBlock/>
      </div>
    )
  }
})

let ViewContentBackgroundBlocks = createClass({

  genRows() {
    let arrRows = []
    let i = I_ROWS
    let arrRow
    let j
    let cellStyle
    let rowStyle

    while (i-- > 0) {
      arrRow = []
      j = I_CELLS_EACH_ROW

      while (j-- > 0) {
        cellStyle = assign({}, configStyle.cell, {
          left: j * (I_CELL_WIDTH + I_GAP)
        })

        arrRow.unshift(
          <li
            style={cellStyle}
            key={getId()}>
          </li>
        )
      }
       

      rowStyle = assign({}, configStyle.row, {
        top: i * (I_CELL_HEIGHT + I_GAP)
      })

      arrRows.unshift(
        <ul
          key={getId()}
          style={rowStyle}>
          {arrRow.slice()}
        </ul>
      )
    }

    return arrRows
  },

  render() {
    let rows = this.genRows()
    return (
      <div className="app-bg-blocks" ref="bgBlocks">
        {rows}
      </div>
    )
  }
})

let ViewActiveBlock = createClass({
  getInitialState() {
    let block = ViewActiveBlock.getRandomBlock()
    let blockCells = ViewActiveBlock.getInitialBlockCells(block)
    let ret = {
      start: ViewActiveBlock.start.slice(),
      coordinates: block.coordinates,
      blockCells: blockCells
    }
    return ret
  },

  render() {
    return (
      <div style={{position: 'relative'}}>
        {this.state.blockCells}
      </div>
    )
  }
})

// 1. according to ViewActiveBlock start pos
// 2. start pos is dynamic
ViewActiveBlock.shape = {
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

// the pos where ViewActiveBlock show at first
ViewActiveBlock.start = [3, 0]

ViewActiveBlock.getRandomBlock = () => {
  // debugger;
  let keys = Object.keys(ViewActiveBlock.shape);
  let indexRandom = Math.floor(Math.random() * keys.length)
  let keyRandom = keys[indexRandom]
  let shape = ViewActiveBlock.shape[keyRandom]
  let blocks = shape.blocks
  let indexCoordinatesRandom = Math.floor(Math.random() * blocks.length)
  let coordinates = blocks[indexCoordinatesRandom]
  return {
    coordinates: coordinates,
    style: shape.style
  }
}

ViewActiveBlock.setPosition = ({ left = 0, top = 0 }) => {

}

ViewActiveBlock.getInitialBlockCells = (block) => {
  let len = block.coordinates.length
  let row
  let len2
  let ret = []
  let style
  let start = ViewActiveBlock.start.slice()

  while (len-- > 0) {
    row = block.coordinates[len]
    len2 = row.length

    while (len2-- > 0) {
      if (row[len2] === 1) {
        style = assign({}, block.style, {
          left: (start[0] + len2) * (I_CELL_WIDTH + I_GAP),
          top: (start[1] + len) * (I_CELL_HEIGHT + I_GAP) + I_GAP,
        })
        ret.unshift(
          <BlockCell
            key={getId()}
            givenStyle={style}>
          </BlockCell>
        )
      }
    }
  }

  return ret
}

let BlockCell = createClass({
  render() {
    let style = assign({}, configStyle.cell, this.props.givenStyle, {
      zIndex: 1
    })
    return (
      <div style={style}></div>
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
