import { generateWhitePiece } from "./generatePiece"
import bishopValidator from "./validators/bishopValidator"
import kingValidator from "./validators/kingValidator"
import knightValidator from "./validators/knightValidator"
import pawnValidator from "./validators/pawnValidator"
import queenValidator from "./validators/queenValidator"
import rookValidator from "./validators/rookValidator"

const whitesPiecesStats = [
  {
    name: "white-rook-1",
    coordinates: [8, 1],
    validator: rookValidator
  },
  {
    name: "white-knight-1",
    coordinates: [8, 2],
    validator: knightValidator
  },
  {
    name: "white-bishop-1",
    coordinates: [8, 3],
    validator: bishopValidator
  },
  {
    name: "white-queen",
    coordinates: [8, 4],
    validator: queenValidator
  },
  {
    name: "white-king",
    coordinates: [8, 5],
    validator: kingValidator
  },
  {
    name: "white-bishop-2",
    coordinates: [8, 6],
    validator: bishopValidator
  },
  {
    name: "white-knight-2",
    coordinates: [8, 7],
    validator: knightValidator
  },
  {
    name: "white-rook-2",
    coordinates: [8, 8],
    validator: rookValidator
  },
  {
    name: "white-pawn-1",
    coordinates: [7, 1],
    validator: pawnValidator
  },
  {
    name: "white-pawn-2",
    coordinates: [7, 2],
    validator: pawnValidator
  },
  {
    name: "white-pawn-3",
    coordinates: [7, 3],
    validator: pawnValidator
  },
  {
    name: "white-pawn-4",
    coordinates: [7, 4],
    validator: pawnValidator
  },
  {
    name: "white-pawn-5",
    coordinates: [7, 5],
    validator: pawnValidator
  },
  {
    name: "white-pawn-6",
    coordinates: [7, 6],
    validator: pawnValidator
  },
  {
    name: "white-pawn-7",
    coordinates: [7, 7],
    validator: pawnValidator
  },
  {
    name: "white-pawn-8",
    coordinates: [7, 8],
    validator: pawnValidator
  }
]
const getFreshWhitePieces = () =>
  whitesPiecesStats.map((piece) => generateWhitePiece(piece))

export default getFreshWhitePieces
