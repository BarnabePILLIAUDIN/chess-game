import getFreshBlackPieces from "./getFreshBlackPieces"
import getFreshWhitePieces from "./getFreshWhitePieces"

const initialiseState = () => ({
  // Allows to if it's the click to select the piece you want to move ot the cell you want to move it to
  isStarted: false,
  whiteRemainingTime: 600,
  blackRemainingTime: 600,
  currentTurn: 1,
  pieces: [...getFreshBlackPieces(), ...getFreshWhitePieces()],
  board: Array(8).fill(Array(8).fill(null)),
  isAPieceSelected: false,
  selectedPieceName: "",
  timerInterval: null,
  winner: ""
})

export default initialiseState
