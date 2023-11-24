import { COLORS } from "../../constants"
import { findPieceFromName } from "./findPiece"

// Return an array with a boolean that represent if there is a winner and a string with the color of the winner
const getWinnerIfThereIsOnePlay = (pieces) => {
  // If the piece is Dead findPieceFromName will return undefined
  if (!findPieceFromName(pieces, "black-king")) {
    return [true, COLORS.WHITE]
  }

  if (!findPieceFromName(pieces, "white-king")) {
    return [true, COLORS.BLACK]
  }

  return [false, ""]
}

export default getWinnerIfThereIsOnePlay
