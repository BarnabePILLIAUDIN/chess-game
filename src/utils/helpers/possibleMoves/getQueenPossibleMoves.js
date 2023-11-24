import getBishopPossibleMoves from "./getBishopPossibleMoves"
import getRookPossibleMoves from "./getRookPossibleMoves"

const getQueenPossibleMoves = (piece, prevState) => [
  ...getRookPossibleMoves(piece, prevState),
  ...getBishopPossibleMoves(piece, prevState)
]

export default getQueenPossibleMoves
