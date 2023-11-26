import { merge } from "@corex/deepmerge"
import checkIfAllowedToPlay from "../helpers/checkIfAllowedToPlay"
import getPossibleMoves from "../helpers/getPossibleMoves"

const doFirstClick = (prevState, piece) => {
  // As the user will select a new piece, we reset the possible moves
  prevState.possibleMoves = []

  // If the first click is on a cell that have no piece in it we do nothing
  if (!piece && !prevState.isAPieceSelected) {
    return prevState
  }

  // In this if we check that it's your piece that you are selecting
  if (
    !prevState.isAPieceSelected &&
    !checkIfAllowedToPlay(piece, prevState.currentTurn)
  ) {
    return prevState
  }

  // If we enter in this if, it means we are on the first click and we clicked on a piece
  // We store in the state that we have a piece selected and which piece it is
  if (!prevState.isAPieceSelected) {
    const newState = {
      isAPieceSelected: true,
      selectedPieceName: piece.name,
      possibleMoves: getPossibleMoves(piece, prevState)
    }

    return merge([prevState, newState])
  }

  return prevState
}

export default doFirstClick
