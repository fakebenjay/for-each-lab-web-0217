function iterativeLog(arr) {
  arr.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arr = ['poop', 'ass', 'butt', 'more poop', 'i am actually twelve years old']
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
