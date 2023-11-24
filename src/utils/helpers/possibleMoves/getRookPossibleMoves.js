import { NUMBER_OF_ROWS } from "../../../constants"
import validateIfDoesNotJumpPieces from "../validateIfDoesNotJumpPieces"

const getRookPossibleMoves = (piece, prevState) => {
  const possibleMoves = []

  for (let i = -NUMBER_OF_ROWS; i <= NUMBER_OF_ROWS; i += 1) {
    if (validateIfDoesNotJumpPieces([0, i], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0], piece.coordinates[1] + i])
    }

    if (validateIfDoesNotJumpPieces([i, 0], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0] + i, piece.coordinates[1]])
    }
  }

  return possibleMoves
}

export default getRookPossibleMoves
