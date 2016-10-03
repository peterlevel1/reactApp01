import blockController from './blockController'

export default {
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

  getRenderRows() {
    if (!this.props.rows) return;

    return blockController.getRenderRows(this.props.rows)
  }
}
