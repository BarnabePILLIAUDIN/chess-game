import {
  INITIAL_BLACK_TIME,
  INITIAL_WHITE_TIME,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS
} from "../constants"
import getFreshBlackPieces from "./getFreshBlackPieces"
import getFreshWhitePieces from "./getFreshWhitePieces"

const initialiseState = () => ({
  // Allows to if it's the click to select the piece you want to move ot the cell you want to move it to
  isStarted: false,
  whiteRemainingTime: INITIAL_WHITE_TIME,
  blackRemainingTime: INITIAL_BLACK_TIME,
  currentTurn: 1,
  pieces: [...getFreshBlackPieces(), ...getFreshWhitePieces()],
  board: Array(NUMBER_OF_ROWS).fill(Array(NUMBER_OF_COLUMNS).fill(null)),
  isAPieceSelected: false,
  possibleMoves: [],
  selectedPieceName: "",
  timerInterval: null,
  winner: ""
})

export default initialiseState
