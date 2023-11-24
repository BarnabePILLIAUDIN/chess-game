// This function can return coordinates that are not on the board as it's just for highlighting the possible moves in green
import getBishopPossibleMoves from "./possibleMoves/getBishopPossibleMoves"
import getKingPossibleMoves from "./possibleMoves/getKingPossibleMoves"
import getKnightPossibleMoves from "./possibleMoves/getKnightPossibleMoves"
import getPawnPossibleMoves from "./possibleMoves/getPawnPossibleMoves"
import getQueenPossibleMoves from "./possibleMoves/getQueenPossibleMoves"
import getRookPossibleMoves from "./possibleMoves/getRookPossibleMoves"

// If the coordinates are not on the board they won't be highlighted
const getPossibleMoves = (piece, prevState) => {
  if (piece.name.includes("king")) {
    return getKingPossibleMoves(piece)
  }

  if (piece.name.includes("pawn")) {
    return getPawnPossibleMoves(piece, prevState)
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
