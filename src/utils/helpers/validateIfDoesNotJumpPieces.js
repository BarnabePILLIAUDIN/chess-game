import { PIECES_TYPES } from "../../constants"
import { findPieceFromCoordinates } from "./findPiece"

// Returns true if the piece does not jump over other pieces
const validateIfDoesNotJumpPieces = (
  coordinatesDiff,
  prevState,
  selectedPiece
) => {
  // Knights are allowed to jump over pieces
  // Kings are only allowed to move one cell at a time so they can't jump over pieces
  if (
    selectedPiece.name.includes(PIECES_TYPES.KNIGHT) ||
    selectedPiece.name.includes(PIECES_TYPES.KING)
  ) {
    return true
  }

  if (selectedPiece.name.includes(PIECES_TYPES.PAWN)) {
    return isPawnJumpingOverPiece(selectedPiece, prevState)
  }

  if (selectedPiece.name.includes(PIECES_TYPES.ROOK)) {
    if (coordinatesDiff[0] !== 0) {
      return validateIfRookDoesNotJumpPiecesVertically(
        selectedPiece,
        coordinatesDiff,
        prevState
      )
    }

    return validateIfRookDoesNotJumpPiecesHorizontally(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  if (selectedPiece.name.includes(PIECES_TYPES.BISHOP)) {
    return validateIfBishopDoesNotJumpingOverPieces(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  if (selectedPiece.name.includes(PIECES_TYPES.QUEEN)) {
    return validateIfQueenDoesNotJumpingOverPieces(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  return true
}
// Function validate if the pawn is jumping over a piece
const isPawnJumpingOverPiece = (selectedPiece, prevState) => {
  if (selectedPiece.hasBeenPlayed) {
    // If the pawn has already been played, it can't jump over pieces because it can only move to the cell ahead
    //and the case where it's blocked is handled in the pawnValidator
    return true
  }
  // If the pawn has not been played yet, it can only jump over pieces that's in the cell right in front of him so we check that

  const piece = findPieceFromCoordinates(
    prevState.pieces,
    // If it's the black pawn, we check the cell right in front of him is at currentRow + 1,currentCol
    // If it's the white pawn, we check the cell right in front of him is at currentRow - 1, currentCol

    prevState.currentTurn % 2 === 0
      ? selectedPiece.coordinates[0] + 1
      : selectedPiece.coordinates[0] - 1,
    selectedPiece.coordinates[1]
  )

  if (piece) {
    return false
  }

  return true
}
// Functions validate if the rook is jumping over a piece
const validateIfRookDoesNotJumpPieces =
  (coordinate) => (selectedPiece, coordinatesDiff, prevState) => {
    const direction = coordinatesDiff[coordinate] > 0 ? 1 : -1
    //As the function can check a row like a column I can't name the counter currentRow or currentColumn
    // So it's named currentLine
    for (
      let currentLine = selectedPiece.coordinates[coordinate] + direction;
      direction > 0
        ? currentLine <
          selectedPiece.coordinates[coordinate] + coordinatesDiff[coordinate]
        : currentLine >
          selectedPiece.coordinates[coordinate] + coordinatesDiff[coordinate];
      currentLine += direction
    ) {
      const piece = findPieceFromCoordinates(
        prevState.pieces,
        coordinate === 0 ? currentLine : selectedPiece.coordinates[0],
        coordinate === 0 ? selectedPiece.coordinates[1] : currentLine
      )

      if (piece && piece.name !== selectedPiece.name) {
        return false
      }
    }

    return true
  }
const validateIfRookDoesNotJumpPiecesVertically =
  validateIfRookDoesNotJumpPieces(0)
const validateIfRookDoesNotJumpPiecesHorizontally =
  validateIfRookDoesNotJumpPieces(1)
// Function validate if the bishop is jumping over a piece
const validateIfBishopDoesNotJumpingOverPieces = (
  selectedPiece,
  coordinatesDiff,
  prevState
) => {
  const xDirection = coordinatesDiff[0] > 0 ? 1 : -1
  const yDirection = coordinatesDiff[1] > 0 ? 1 : -1

  for (
    let i = selectedPiece.coordinates[0] + xDirection,
      j = selectedPiece.coordinates[1] + yDirection;
    xDirection > 0
      ? i < selectedPiece.coordinates[0] + coordinatesDiff[0]
      : i > selectedPiece.coordinates[0] + coordinatesDiff[0];
    i += xDirection, j += yDirection
  ) {
    const piece = findPieceFromCoordinates(prevState.pieces, i, j)

    if (piece) {
      return false
    }
  }

  return true
}
// Function validate if the queen is jumping over a piece
const validateIfQueenDoesNotJumpingOverPieces = (
  selectedPiece,
  coordinatesDiff,
  prevState
) => {
  if (coordinatesDiff[0] !== 0 && coordinatesDiff[1] === 0) {
    return validateIfRookDoesNotJumpPiecesVertically(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  if (coordinatesDiff[1] !== 0 && coordinatesDiff[0] === 0) {
    return validateIfRookDoesNotJumpPiecesHorizontally(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  if (Math.abs(coordinatesDiff[0]) === Math.abs(coordinatesDiff[1])) {
    return validateIfBishopDoesNotJumpingOverPieces(
      selectedPiece,
      coordinatesDiff,
      prevState
    )
  }

  // If we are still here it's an illegal move so we return false to stop the player
  return false
}

export default validateIfDoesNotJumpPieces
