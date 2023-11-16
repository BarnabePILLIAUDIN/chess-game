import { generateBlackPiece } from "./generatePiece"
import bishopValidator from "./validators/bishopValidator"
import kingValidator from "./validators/kingValidator"
import knightValidator from "./validators/knightValidator"
import pawnValidator from "./validators/pawnValidator"
import queenValidator from "./validators/queenValidator"
import rookValidator from "./validators/rookValidator"

const blackPiecesStats = [
  {
    name: "black-rook-1",
    coordinates: [1, 1],
    validator: rookValidator
  },
  {
    name: "black-knight-1",
    coordinates: [1, 2],
    validator: knightValidator
  },
  {
    name: "black-bishop-1",
    coordinates: [1, 3],
    validator: bishopValidator
  },
  {
    name: "black-queen",
    coordinates: [1, 4],
    validator: queenValidator
  },
  {
    name: "black-king",
    coordinates: [1, 5],
    validator: kingValidator
  },
  {
    name: "black-bishop-2",
    coordinates: [1, 6],
    validator: bishopValidator
  },
  {
    name: "black-knight-2",
    coordinates: [1, 7],
    validator: knightValidator
  },
  {
    name: "black-rook-2",
    coordinates: [1, 8],
    validator: rookValidator
  },
  {
    name: "black-pawn-1",
    coordinates: [2, 1],
    validator: pawnValidator
  },
  {
    name: "black-pawn-2",
    coordinates: [2, 2],
    validator: pawnValidator
  },
  {
    name: "black-pawn-3",
    coordinates: [2, 3],
    validator: pawnValidator
  },
  {
    name: "black-pawn-4",
    coordinates: [2, 4],
    validator: pawnValidator
  },
  {
    name: "black-pawn-5",
    coordinates: [2, 5],
    validator: pawnValidator
  },
  {
    name: "black-pawn-6",
    coordinates: [2, 6],
    validator: pawnValidator
  },
  {
    name: "black-pawn-7",
    coordinates: [2, 7],
    validator: pawnValidator
  },
  {
    name: "black-pawn-8",
    coordinates: [2, 8],
    validator: pawnValidator
  }
]
const getFreshBlackPieces = () =>
  blackPiecesStats.map((piece) => generateBlackPiece(piece))

export default getFreshBlackPieces
