import { COLORS } from "../../../constants"
import { findPieceFromCoordinates } from "../findPiece"
const getPawnPossibleMoves = (piece, prevState) => {
  const possibleMoves = []

  if (piece.color === COLORS.WHITE) {
    possibleMoves.push(...getPawnPossibleMovesWhite(piece, prevState))
  }

  if (piece.color === COLORS.BLACK) {
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

  if (piece.color === COLORS.WHITE) {
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

  if (piece.color === COLORS.BLACK) {
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
