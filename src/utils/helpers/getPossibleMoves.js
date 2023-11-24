// This function can return coordinates that are not on the board as it's just for highlighting the possible moves in green
import { PIECES_TYPES } from "../../constants"
import getBishopPossibleMoves from "./possibleMoves/getBishopPossibleMoves"
import getKingPossibleMoves from "./possibleMoves/getKingPossibleMoves"
import getKnightPossibleMoves from "./possibleMoves/getKnightPossibleMoves"
import getPawnPossibleMoves from "./possibleMoves/getPawnPossibleMoves"
import getQueenPossibleMoves from "./possibleMoves/getQueenPossibleMoves"
import getRookPossibleMoves from "./possibleMoves/getRookPossibleMoves"

// If the coordinates are not on the board they won't be highlighted
const getPossibleMoves = (piece, prevState) => {
  if (piece.name.includes(PIECES_TYPES.KING)) {
    return getKingPossibleMoves(piece)
  }

  if (piece.name.includes(PIECES_TYPES.PAWN)) {
    return getPawnPossibleMoves(piece, prevState)
  }

  if (piece.name.includes(PIECES_TYPES.ROOK)) {
    return getRookPossibleMoves(piece, prevState)
  }

  if (piece.name.includes(PIECES_TYPES.BISHOP)) {
    return getBishopPossibleMoves(piece, prevState)
  }

  if (piece.name.includes(PIECES_TYPES.KNIGHT)) {
    return getKnightPossibleMoves(piece)
  }

  if (piece.name.includes(PIECES_TYPES.QUEEN)) {
    return getQueenPossibleMoves(piece, prevState)
  }

  return []
}

export default getPossibleMoves
