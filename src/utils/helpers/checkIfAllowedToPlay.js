import { COLORS } from "../../constants"

const checkIfAllowedToPlay = (piece, currentTurn) =>
  (currentTurn % 2 === 0 && piece.color === COLORS.BLACK) ||
  (currentTurn % 2 === 1 && piece.color === COLORS.WHITE)

export default checkIfAllowedToPlay
