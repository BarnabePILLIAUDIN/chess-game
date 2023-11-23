// This function can return coordinates that are not on the board as it's just for highlighting the possible moves in green
import validateIfDoesNotJumpPieces from "./validateIfDoesNotJumpPieces"

// If the coordinates are not on the board they won't be highlighted
const getPossibleMoves = (piece, prevState) => {
  if (piece.name.includes("king")) {
    return getKingPossibleMoves(piece)
  }

  if (piece.name.includes("pawn")) {
    return getPawnPossibleMoves(piece)
  }

  if (piece.name.includes("rook")) {
    return getRookPossibleMoves(piece, prevState)
  }

  if (piece.name.includes("bishop")) {
    return getBishopPossibleMoves(piece, prevState)
  }

  if (piece.name.includes("knight")) {
    return getKnightPossibleMoves(piece)
  }

  if (piece.name.includes("queen")) {
    return getQueenPossibleMoves(piece, prevState)
  }

  return []
}

export default getPossibleMoves
const getKingPossibleMoves = (piece) => [
  [piece.coordinates[0] + 1, piece.coordinates[1] + 1],
  [piece.coordinates[0] + 1, piece.coordinates[1] - 1],
  [piece.coordinates[0] - 1, piece.coordinates[1] + 1],
  [piece.coordinates[0] - 1, piece.coordinates[1] - 1],
  [piece.coordinates[0] + 1, piece.coordinates[1]],
  [piece.coordinates[0] - 1, piece.coordinates[1]],
  [piece.coordinates[0], piece.coordinates[1] + 1],
  [piece.coordinates[0], piece.coordinates[1] - 1]
]
const getPawnPossibleMoves = (piece) => {
  const possibleMoves = []

  if (piece.color === "white") {
    if (!piece.hasBeenPlayed) {
      possibleMoves.push([piece.coordinates[0] - 2, piece.coordinates[1]])
    }

    possibleMoves.push([piece.coordinates[0] - 1, piece.coordinates[1]])

    return possibleMoves
  }

  if (piece.color === "black") {
    if (!piece.hasBeenPlayed) {
      possibleMoves.push([piece.coordinates[0] + 2, piece.coordinates[1]])
    }

    possibleMoves.push([piece.coordinates[0] + 1, piece.coordinates[1]])

    return possibleMoves
  }

  return possibleMoves
}
const getRookPossibleMoves = (piece, prevState) => {
  const possibleMoves = []

  for (let i = -8; i <= 8; i += 1) {
    if (validateIfDoesNotJumpPieces([0, i], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0], piece.coordinates[1] + i])
    }

    if (validateIfDoesNotJumpPieces([i, 0], prevState, piece)) {
      possibleMoves.push([piece.coordinates[0] + i, piece.coordinates[1]])
    }
  }

  return possibleMoves
}
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
const getKnightPossibleMoves = (piece) => [
  [piece.coordinates[0] + 2, piece.coordinates[1] + 1],
  [piece.coordinates[0] + 2, piece.coordinates[1] - 1],
  [piece.coordinates[0] - 2, piece.coordinates[1] + 1],
  [piece.coordinates[0] - 2, piece.coordinates[1] - 1],
  [piece.coordinates[0] + 1, piece.coordinates[1] + 2],
  [piece.coordinates[0] + 1, piece.coordinates[1] - 2],
  [piece.coordinates[0] - 1, piece.coordinates[1] + 2],
  [piece.coordinates[0] - 1, piece.coordinates[1] - 2]
]
const getQueenPossibleMoves = (piece, prevState) => [
  ...getRookPossibleMoves(piece, prevState),
  ...getBishopPossibleMoves(piece, prevState)
]
