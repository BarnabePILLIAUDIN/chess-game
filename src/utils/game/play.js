import { merge } from "@corex/deepmerge"
import { findPieceFromCoordinate } from "../helpers/findPiece"
import getWinnerIfThereIsOnePlay from "../helpers/getWinnerIfThereIsOnePlay"
import firstClick from "./firstClick"
import isFirstClick from "./isFirstClick"
import secondClick from "./secondClick"

const playFunction = (prevState, rowIndex, cellIndex) => {
  if (prevState.winner) {
    return prevState
  }

  // The piece that was selected on first click
  const piece = findPieceFromCoordinate(prevState.pieces, rowIndex, cellIndex)

  if (isFirstClick(piece, prevState)) {
    const newState = firstClick(prevState, piece)

    return newState
  }

  const newState = secondClick(piece, prevState, [rowIndex, cellIndex])
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
