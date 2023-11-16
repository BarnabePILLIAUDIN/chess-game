import { findPieceFromName } from "./findPiece"

// Return an array with a boolean that represent if there is a winner and a string with the color of the winner
const getWinnerIfThereIsOnePlay = (pieces) => {
  // If the piece is Dead findPieceFromName will return undefined
  if (!findPieceFromName(pieces, "black-king")) {
    return [true, "white"]
  }

  if (!findPieceFromName(pieces, "white-king")) {
    return [true, "black"]
  }

  return [false, ""]
}

export default getWinnerIfThereIsOnePlay
