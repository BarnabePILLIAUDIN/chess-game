import { findPieceFromCoordinate } from "../helpers/findPiece"

const pawnValidator = (coordinatesDiff, state, piece) =>
  !piece.hasBeenPlayed
    ? validateFirstPlay(coordinatesDiff, state, piece.coordinates)
    : validateOthersPlays(coordinatesDiff, state, piece.coordinates)
export default pawnValidator
const validateFirstPlay = (coordinatesDiff, state, currentCoordinates) => {
  if (
    Math.abs(coordinatesDiff[0]) === 1 &&
    Math.abs(coordinatesDiff[1]) === 1
  ) {
    if (
      !findPieceFromCoordinate(
        state.pieces,
        currentCoordinates[0] + coordinatesDiff[0],
        currentCoordinates[1] + coordinatesDiff[1]
      )
    ) {
      // If there is no piece in the cell, the pawn can't move diagonally
      return false
    }

    if (state.currentTurn % 2 === 0) {
      // Make sure that the black pawn doesn't move backward
      return coordinatesDiff[0] > 0
    }

    // Make sure that the white pawn doesn't move backward
    return coordinatesDiff[0] < 0
  }

  return state.currentTurn % 2 === 0
    ? (Number.parseInt(coordinatesDiff[0], 10) === 1 ||
        Number.parseInt(coordinatesDiff[0], 10) === 2) &&
        Number.parseInt(coordinatesDiff[1], 10) === 0
    : (Number.parseInt(coordinatesDiff[0], 10) === -1 ||
        Number.parseInt(coordinatesDiff[0], 10) === -2) &&
        Number.parseInt(coordinatesDiff[1], 10) === 0
}
const validateOthersPlays = (coordinatesDiff, state, currentCoordinates) => {
  if (
    Math.abs(coordinatesDiff[0]) === 1 &&
    Math.abs(coordinatesDiff[1]) === 1
  ) {
    if (
      !findPieceFromCoordinate(
        state.pieces,
        currentCoordinates[0] + coordinatesDiff[0],
        currentCoordinates[1] + coordinatesDiff[1]
      )
    ) {
      // If there is no piece in the cell, the pawn can't move diagonally
      return false
    }

    if (state.currentTurn % 2 === 0) {
      // Make sure that the black pawn doesn't move backward
      return coordinatesDiff[0] > 0
    }

    // Make sure that the white pawn doesn't move backward
    return coordinatesDiff[0] < 0
  }

  if (isBlocked(coordinatesDiff, currentCoordinates, state.pieces)) {
    return false
  }

  return state.currentTurn % 2 === 0
    ? Number.parseInt(coordinatesDiff[0], 10) === 1 &&
        Number.parseInt(coordinatesDiff[1], 10) === 0
    : Number.parseInt(coordinatesDiff[0], 10) === -1 &&
        Number.parseInt(coordinatesDiff[1], 10) === 0
}
const isBlocked = (coordinatesDiff, currentCoordinates, pieces) =>
  Boolean(
    findPieceFromCoordinate(
      pieces,
      currentCoordinates[0] + coordinatesDiff[0],
      currentCoordinates[1]
    )
  )
