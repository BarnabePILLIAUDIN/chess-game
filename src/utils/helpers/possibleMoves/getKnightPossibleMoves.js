const getKnightPossibleMoves = (piece) => [
  [piece.coordinates[0] + 2, piece.coordinates[1] + 1],
  [piece.coordinates[0] + 2, piece.coordinates[1] - 1],
  [piece.coordinates[0] - 2, piece.coordinates[1] + 1],
  [piece.coordinates[0] - 2, piece.coordinates[1] - 1],
  [piece.coordinates[0] + 1, piece.coordinates[1] + 2],
  [piece.coordinates[0] + 1, piece.coordinates[1] - 2],
  [piece.coordinates[0] - 1, piece.coordinates[1] + 2],
  [piece.coordinates[0] - 1, piece.coordinates[1] - 2]
]

export default getKnightPossibleMoves
