var test = require('tape')
var addColor = require('tap-colorize')
test.createStream().pipe(addColor()).pipe(process.stdout)
var board = require('../lib/board')

test('You can retrieve the whole board', function (t) {
  t.plan(3)
  var testBoard = board()
  t.ok(Array.isArray(testBoard), 'the board is a 2D array')
  t.equal(testBoard[0].length, 15, 'and has 15 squares across')
  t.equal(testBoard.length, 15, 'and 15 squares down')
  t.end()
})
test('Or you can retreive a single square', function (t) {
  t.plan(1)
  var square = board(0,0)
  t.same(square, { LS:1, WS:3 }, 'A1 is a triple word score')
  t.end()
})
test('Calling with one param will return that row', function (t) {
  t.plan(2)
  var row = board(1)
  t.equals(row.length, 15, 'returns 15 squares')
  t.equals(row[1].WS, 2, 'that are the second row')
  t.end()
})
test('An error is thrown if you pass in in correct params', function (t) {
  t.plan(3)
  t.throws(function () {board('1','1')}, 'can\'t pass in strings')
  t.throws(function () {board(1,20)}, 'or references beyond the board')
  t.throws(function () {board(-1,20)}, 'or negative numbers')
  t.end()
})
test('Correct number of bonues squares on each row', function (t) {
  t.plan(1)
  var bonusSquares = [ 5, 4, 4, 5, 2, 4, 4, 4, 4, 4, 2, 5, 4, 4, 5 ]
  t.same(allBonusSquares(),bonusSquares, 'different rows have different bonus squares')
  t.end()
})
function bonuses (row) {
  return board(row).reduce(function (total, square) {
    if (square.WS > 1 || square.LS > 1) total += 1
    return total
  },0) 
}
function allBonusSquares () {
  var boardRows = board()
  return boardRows.map(function (row, index) {
    return bonuses(index)
  })
}