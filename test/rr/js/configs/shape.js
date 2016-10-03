// =======================
// block number 0, 1 ... description
// ----------------------------------
// 0: for space, dummy occupation
// 1: common occupied
//
// 2, 3, 4 ~ higher numbers: may contains some useful info
// and may display different backgroundColor
// =======================

// 1. according to ViewActiveBlock start pos
// 2. start pos is dynamic
export default {
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
