export const findPieceFromCoordinates = (pieces, rowIndex, cellIndex) =>
  pieces.find(
    (piece) =>
      piece.coordinates[0] === rowIndex &&
      piece.coordinates[1] === cellIndex &&
      !piece.isDead
  )

export const findPieceFromName = (pieces, name) =>
  pieces.find((piece) => piece.name === name && !piece.isDead)
