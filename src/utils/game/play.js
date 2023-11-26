import { merge } from "@corex/deepmerge"
import { findPieceFromCoordinates } from "../helpers/findPiece"
import getWinnerIfThereIsOnePlay from "../helpers/getWinnerIfThereIsOnePlay"
import doFirstClick from "./doFirstClick"
import isFirstClick from "./isFirstClick"
import doSecondClick from "./doSecondClick"

const playFunction = (prevState, rowIndex, cellIndex) => {
  if (prevState.winner) {
    return prevState
  }

  // The piece that was selected on first click
  const piece = findPieceFromCoordinates(prevState.pieces, rowIndex, cellIndex)

  if (isFirstClick(piece, prevState)) {
    const newState = doFirstClick(prevState, piece)

    return newState
  }

  const newState = doSecondClick(piece, prevState, [rowIndex, cellIndex])
  const [hasWinner, winner] = getWinnerIfThereIsOnePlay(
    merge([prevState, newState]).pieces
  )

  if (hasWinner) {
    newState.winner = winner

    return newState
  }

  return newState
}

export default playFunction
