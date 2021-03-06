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
const gamesEvents = require('./games/events.js')
const store = require('./store.js')

// const gBoardArr = ['', '', '', '', '', '', '', '', '']
// let gameState = true

const checkIfThereIsAWinner = function () {
  // Avoid empty arrays
  if (store.gBoardArr[0] === store.gBoardArr[1] && store.gBoardArr[1] === store.gBoardArr[2] && store.gBoardArr[1] !== '') {
    // console.log('YOU WON!')
    endTheGame()
    return true
    // gameState = false
  } else if (store.gBoardArr[3] === store.gBoardArr[4] && store.gBoardArr[4] === store.gBoardArr[5] && store.gBoardArr[4] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[6] === store.gBoardArr[7] && store.gBoardArr[7] === store.gBoardArr[8] && store.gBoardArr[7] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[0] === store.gBoardArr[3] && store.gBoardArr[3] === store.gBoardArr[6] && store.gBoardArr[3] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[1] === store.gBoardArr[4] && store.gBoardArr[4] === store.gBoardArr[7] && store.gBoardArr[4] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[2] === store.gBoardArr[5] && store.gBoardArr[5] === store.gBoardArr[8] && store.gBoardArr[5] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[0] === store.gBoardArr[4] && store.gBoardArr[4] === store.gBoardArr[8] && store.gBoardArr[4] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr[2] === store.gBoardArr[4] && store.gBoardArr[4] === store.gBoardArr[6] && store.gBoardArr[4] !== '') {
    // console.log('YOU WON!')
    return true
    // gameState = false
  } else if (store.gBoardArr.every(isEmpty)) {
    // console.log('Draw!')
    $('.play-message-board').text('Draw!')
    $('#whosTurn').text('Draw :( ')

    gamesEvents.showPlayButton()
    // alert('DRAW')
    return false
  } else {
    // console.log('Keep going')
    return false
  }
  //
}

const isEmpty = function (element) {
  if (element === '') {
    return false
  } else {
    return true
  }
}

const endTheGame = function () {
  gamesEvents.endTheGameOnEvents()
}

const updateGameBoardArray = function (value, arrNumber) {
  // console.log('You have reached the gameEngine.js file! You value is : ' + value + ' arrNumber: ' + arrNumber)
  store.gBoardArr[arrNumber] = value
  // console.log('array Updated: ' + store.gBoardArr)
  // ^^ Local Array Updated
  if (store.game === undefined) {
    // console.log('there is NO game')
  }

  gamesEvents.updateApiArray(arrNumber, value, checkIfThereIsAWinner())

  // is there a game???
  // TOKEN="" INDEX="" ID="" VALUE="" OVER="" sh games/update.sh
  // checkIfThereIsAWinner()
}

module.exports = {
  // Functions
  updateGameBoardArray
}
