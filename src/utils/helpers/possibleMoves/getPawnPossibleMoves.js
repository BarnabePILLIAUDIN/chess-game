import { findPieceFromCoordinates } from "../findPiece"
const getPawnPossibleMoves = (piece, prevState) => {
  const possibleMoves = []

  if (piece.color === "white") {
    possibleMoves.push(...getPawnPossibleMovesWhite(piece, prevState))
  }

  if (piece.color === "black") {
    possibleMoves.push(...getPawnPossibleMovesBlack(piece, prevState))
  }

  possibleMoves.push(...getPiecesThatPawnCanEat(piece, prevState))

  return possibleMoves
}
const getPawnPossibleMovesWhite = (piece, prevState) => {
  const possibleMoves = []

  if (
    !piece.hasBeenPlayed &&
    !findPieceFromCoordinates(
      prevState.pieces,
      piece.coordinates[0] - 2,
      piece.coordinates[1]
    )
  ) {
    possibleMoves.push([piece.coordinates[0] - 2, piece.coordinates[1]])
  }

  if (
    !findPieceFromCoordinates(
      prevState.pieces,
      piece.coordinates[0] - 1,
      piece.coordinates[1]
    )
  ) {
    possibleMoves.push([piece.coordinates[0] - 1, piece.coordinates[1]])
  }

  return possibleMoves
}
const getPawnPossibleMovesBlack = (piece, prevState) => {
  const possibleMoves = []

  if (
    !piece.hasBeenPlayed &&
    !findPieceFromCoordinates(
      prevState.pieces,
      piece.coordinates[0] + 2,
      piece.coordinates[1]
    )
  ) {
    possibleMoves.push([piece.coordinates[0] + 2, piece.coordinates[1]])
  }

  if (
    !findPieceFromCoordinates(
      prevState.pieces,
      piece.coordinates[0] + 1,
      piece.coordinates[1]
    )
  ) {
    possibleMoves.push([piece.coordinates[0] + 1, piece.coordinates[1]])
  }

  return possibleMoves
}
const getPiecesThatPawnCanEat = (piece, prevState) => {
  const possibleMoves = []

  if (piece.color === "white") {
    if (
      findPieceFromCoordinates(
        prevState.pieces,
        piece.coordinates[0] - 1,
        piece.coordinates[1] + 1
      )
    ) {
      possibleMoves.push([piece.coordinates[0] - 1, piece.coordinates[1] + 1])
    }

    if (
      findPieceFromCoordinates(
        prevState.pieces,
        piece.coordinates[0] - 1,
        piece.coordinates[1] - 1
      )
    ) {
      possibleMoves.push([piece.coordinates[0] - 1, piece.coordinates[1] - 1])
    }
  }

  if (piece.color === "black") {
    if (
      findPieceFromCoordinates(
        prevState.pieces,
        piece.coordinates[0] + 1,
        piece.coordinates[1] + 1
      )
    ) {
      possibleMoves.push([piece.coordinates[0] + 1, piece.coordinates[1] + 1])
    }

    if (
      findPieceFromCoordinates(
        prevState.pieces,
        piece.coordinates[0] + 1,
        piece.coordinates[1] - 1
      )
    ) {
      possibleMoves.push([piece.coordinates[0] + 1, piece.coordinates[1] - 1])
    }
  }

  return possibleMoves
}

export default getPawnPossibleMoves
