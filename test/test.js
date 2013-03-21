var network = require("../flow.js")

require("tap").test("flow", function(t) {
  
  console.log(network.flow(
    [[0,1], [1,2]],
    [1,1],
    [[0], [2]],
    [-1,1],
    [1,1]
  ))
  
  console.log(network.flow(
    [[0,1,2], [1,3,2]],
    [1,1],
    [[0,1], [1,3], [3,2], [2, 0]],
    [1, 1, 1, 1],
    [1, 1]
  ))

  t.end()
})