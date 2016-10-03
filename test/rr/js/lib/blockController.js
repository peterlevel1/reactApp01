import { assign, getId } from './util'

export default {


  getContainerRows(lenRows, lenCells) {
    let row, rows = []

    for (let i = 0, ii = lenRows; i < ii; i++) {
      row = []
      for (let k = 0, kk = lenCells; k < kk; k++) {
        row.push([i, k, { occupied: false, style: null }])
      }
      rows.push(row)
    }

    return rows
  },

  getPositionByStart({start, coordinates}) {
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
      // may change when key up event happen
      start: start,
      index: indexCoordinatesRandom,
      position: position,
      coordinates: coordinates,
      // these data do not change
      style: shape.style,
      shape: shape
    }
  },

  eachBlockCell(rows, block, cb) {
    let row, cell, data
    let targetRow, targetCell, targetRows = block.position

    for (let i = 0, ii = targetRows.length; i < ii; i++) {
      targetRow = targetRows[i]
      row = null
      for (let k = 0, kk = targetRow.length; k < kk; k++) {
        targetCell = targetRow[k]
        row = row || rows[targetCell[1]]
        cell = row[targetCell[0]]

        if (cb(cell) === false) return
      }
    }
  },

  clearBlockData(rows, block) {
    this.eachBlockCell(rows, block, (cell) => {
      if (!cell) throw new Error('[clearBlockData]: no cell')

      var data = cell[2]
      if (!data) throw new Error('[clearBlockData]: no data with cell[2]')

      if (!data.occupied) throw new Error('[clearBlockData]: cell should be occupied')

      data.occupied = false
      data.style = null
    })
  },

  setBlockData(rows, block) {
    this.eachBlockCell(rows, block, (cell) => {
      if (!cell) throw new Error('[setBlockData]: no cell')

      var data = cell[2]
      if (!data) throw new Error('[setBlockData]: no data with cell[2]')

      if (data.occupied) throw new Error('[setBlockData]: cell should not be occupied')

      data.occupied = true
      data.style = data.style || {}
      assign(data.style, style)
    })
  },

  testCollision(rows, block) {
    let result = false

    this.eachBlockCell(rows, block, (cell) => {
      if (!cell) throw new Error('[testCollision]: no cell')

      data = cell[2]
      if (!data) throw new Error('[testCollision]: no data with cell[2]')

      if (data.occupied) {
        result = true
        return false
      }
    })

    return result
  },

  getRenderRows(rows) {
    let jsxRows = [], jsxRow
    let row, cell

    for (let i = 0, ii = rows.length; i < ii; i++) {
      row = rows[i]
      jsxRow = []

      for (let k = 0, kk = row.length; k < kk; k++) {
        cell = row[k]
        jsxRow.push(<li className="block-cell" key={getId()}></li>)
      }

      jsxRows.push(
        <ul className="block-row" key={getId()}>
          {jsxRow}
        </ul>
      )
    }

    return jsxRows
  },

  getNextBlockData(block) {
    let nextIndex = block.index + 1
    if (nextIndex === block.shape.blocks.length) nextIndex = 0
    return {
      index: nextIndex,
      coordinates: block.shape.blocks[nextIndex]
    }
  }
}
