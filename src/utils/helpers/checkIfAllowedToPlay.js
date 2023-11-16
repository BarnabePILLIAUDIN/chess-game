const checkIfAllowedToPlay = (piece, currentTurn) =>
  (currentTurn % 2 === 0 && piece.color === "black") ||
  (currentTurn % 2 === 1 && piece.color === "white")

export default checkIfAllowedToPlay
