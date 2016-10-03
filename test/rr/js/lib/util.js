let assign = Object.assign

let getId = (() => {
  let id = -1
  return () => {
    id++
    return id + ''
  }
})()

export {
  assign,
  getId
}
