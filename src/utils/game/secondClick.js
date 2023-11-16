import { merge } from "@corex/deepmerge"
import { findPieceFromName } from "../helpers/findPiece"
import validateIfJumpPieces from "../helpers/validateIfDoesNotJumpPieces"
const secondClick = (piece, prevState, [rowIndex, cellIndex]) => {
  // If we reach this point, it means a piece have been selected on first click so we store it into a variable
  const selectedPiece = findPieceFromName(
    prevState.pieces,
    prevState.selectedPieceName
  )

  // If we enter in this if, it means we are on the second click and we clicked on a cell that have no piece in it
  // So we move the piece by changing its coordinates
  if (!piece && prevState.isAPieceSelected) {
    const newState = handleSecondClickWithNoPieceInCell(
      prevState,
      selectedPiece,
      [rowIndex, cellIndex]
    )

    return newState
  }

  // If we enter in this if, it means we are on the second click and we clicked on a cell that have a piece in it
  // So we check if the piece we clicked on is an enemy piece and if it is we kill it
  if (selectedPiece.color !== piece.color) {
    handleSecondClickWithPieceInCell(
      prevState,
      [selectedPiece, piece],
      [rowIndex, cellIndex]
    )
  }

  // If we are here, it means we are on the second click and we clicked on a cell that have one of our piece in it
  // So we unselect the piece the user selected before
  const newState = {
    isAPieceSelected: false,
    selectedPieceName: ""
  }

  return merge([prevState, newState])
}

export default secondClick
const handleSecondClickWithNoPieceInCell = (
  prevState,
  selectedPiece,
  [rowIndex, cellIndex]
) => {
  const selectedPieceId = prevState.pieces.indexOf(selectedPiece)
  const coordinatesDiff = [
    rowIndex - selectedPiece.coordinates[0],
    cellIndex - selectedPiece.coordinates[1]
  ]

  if (!selectedPiece.validator(coordinatesDiff, prevState, selectedPiece)) {
    return prevState
  }

  if (!validateIfJumpPieces(coordinatesDiff, prevState, selectedPiece)) {
    return prevState
  }

  const newPieces = [...prevState.pieces]
  newPieces[selectedPieceId].coordinates = [rowIndex, cellIndex]
  newPieces[selectedPieceId].hasBeenPlayed = true
  const newState = {
    isAPieceSelected: false,
    selectedPieceName: "",
    pieces: newPieces,
    currentTurn: (prevState.currentTurn += 1)
  }

  return merge([prevState, newState])
}
const handleSecondClickWithPieceInCell = (
  prevState,
  [selectedPiece, piece],
  [rowIndex, cellIndex]
) => {
  const selectedPieceId = prevState.pieces.indexOf(selectedPiece)
  const coordinatesDiff = [
    rowIndex - selectedPiece.coordinates[0],
    cellIndex - selectedPiece.coordinates[1]
  ]

  if (!selectedPiece.validator(coordinatesDiff, prevState, selectedPiece)) {
    return prevState
  }

  if (!validateIfJumpPieces(coordinatesDiff, prevState, selectedPiece)) {
    return prevState
  }

  const newPieces = [...prevState.pieces]
  const pieceId = prevState.pieces.indexOf(piece)
  newPieces[selectedPieceId].coordinates = [rowIndex, cellIndex]
  newPieces[pieceId].isDead = true
  newPieces[selectedPieceId].hasBeenPlayed = true

  const newState = {
    isAPieceSelected: false,
    selectedPieceName: "",
    pieces: newPieces,
    currentTurn: (prevState.currentTurn += 1)
  }

  return merge([prevState, newState])
}
