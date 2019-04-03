// {
//       "id": 1,
//       "cells": ["o","x","o","x","o","x","o","x","o"],
//       "over": true,
//       "player_x": {
//         "id": 1,
//         "email": "and@and.com"
//       },
//       "player_o": null
//     },
// const evt = require('./auth/events.js')
const gBoardArr = ['', '', '', '', '', '', '', '', '']
// let gameState = true

const checkIfThereIsAWinner = function () {
  // Avoid empty arrays
  if (gBoardArr[0] === gBoardArr[1] && gBoardArr[1] === gBoardArr[2] && gBoardArr[1] !== '') {
    console.log('YOU WON!')
    endTheGame()
    // gameState = false
  } else if (gBoardArr[3] === gBoardArr[4] && gBoardArr[4] === gBoardArr[5] && gBoardArr[4] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[6] === gBoardArr[7] && gBoardArr[7] === gBoardArr[8] && gBoardArr[7] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[0] === gBoardArr[3] && gBoardArr[3] === gBoardArr[6] && gBoardArr[3] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[1] === gBoardArr[4] && gBoardArr[4] === gBoardArr[7] && gBoardArr[4] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[2] === gBoardArr[5] && gBoardArr[5] === gBoardArr[8] && gBoardArr[5] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[0] === gBoardArr[4] && gBoardArr[4] === gBoardArr[8] && gBoardArr[4] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else if (gBoardArr[2] === gBoardArr[4] && gBoardArr[4] === gBoardArr[6] && gBoardArr[4] !== '') {
    console.log('YOU WON!')
    // gameState = false
  } else {
    console.log('Keep going')
  }
  //
}

const endTheGame = function () {
  $('#whosTurn').text('Game Over')
}

const updateGameBoardArray = function (value, arrNumber) {
  console.log('You have reached the gameEngine.js file! You value is : ' + value + ' arrNumber: ' + arrNumber)
  gBoardArr[arrNumber] = value
  console.log('array Updated: ' + gBoardArr)
  checkIfThereIsAWinner()
}

module.exports = {
  // Functions
  updateGameBoardArray
}
