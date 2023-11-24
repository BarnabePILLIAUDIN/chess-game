import validateIfDoesNotJumpPieces from "../validateIfDoesNotJumpPieces"

const getBishopPossibleMoves = (piece, prevState) => {
  const possibleMoves = []
  for (let i = -8; i <= 8; i += 1) {
    if (validateIfDoesNotJumpPieces([i, i], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0] + i, piece.coordinates[1] + i])
    }

    if (validateIfDoesNotJumpPieces([i, -i], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0] + i, piece.coordinates[1] - i])
    }
  }

  return possibleMoves
}

export default getBishopPossibleMoves
