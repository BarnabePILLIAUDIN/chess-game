import { findPieceFromCoordinate } from "./findPiece"

// Returns true if the piece does not jump over other pieces
const validateIfDoesNotJumpPieces = (
  coordinatesDiff,
  prevState,
  selectedPiece
) => {
  // Knights are allowed to jump over pieces
  // Kings are only allowed to move one cell at a time so they can't jump over pieces
  if (
    selectedPiece.name.includes("knight") ||
    selectedPiece.name.includes("king")
  ) {
    return true
  }

  if (selectedPiece.name.includes("pawn")) {
    if (selectedPiece.hasBeenPlayed) {
      // If the pawn has already been played, it can't jump over pieces because it can only move to the cell ahead
      //and the case where it's blocked is handled in the pawnValidator
      return true
    }
    // If the pawn has not been played yet, it can only jump over pieces that's in the cell right in front of him so we check that

    const piece = findPieceFromCoordinate(
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

  return true
}

export default validateIfDoesNotJumpPieces
