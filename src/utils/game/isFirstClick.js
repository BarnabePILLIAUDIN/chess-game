import checkIfAllowedToPlay from "../helpers/checkIfAllowedToPlay"

const isFirstClick = (piece, prevState) =>
  (!piece && !prevState.isAPieceSelected) ||
  (!prevState.isAPieceSelected &&
    !checkIfAllowedToPlay(piece, prevState.currentTurn)) ||
  !prevState.isAPieceSelected

export default isFirstClick
