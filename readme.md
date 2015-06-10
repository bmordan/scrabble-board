##Scrabble-board

#Query a standard scrabble board

This module provides the **LS** (Letter Score) multiplier and **WS** (Word Score) multiplier for a given square on a *standard scrabble board.

The function accepts 2 integers as parameters, `x, y`, that map to a position on the board. Both params must be between 0 and 14. `x` is the column. `y` is the row.

It returns an object with properties for the Letter Score and Word Score multiplier value for the requested square. It throws and Errors if the parameters are unexpected.

```js
// x, y => {}
board(0,0) // { LS: 1, WS: 3 } AKA "Triple word score"
board(1,0) // { LS: 1, WS: 1 } AKA "Normal"
board(2,0) // { LS: 1, WS: 1 } AKA "Normal"
board(3,0) // { LS: 2, WS: 1 } AKA "Double letter score"
```
*Based on the 2000 J.W.Spear & Sons PLC board*