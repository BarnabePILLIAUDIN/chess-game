const getKingPossibleMoves = (piece) => [
  [piece.coordinates[0] + 1, piece.coordinates[1] + 1],
  [piece.coordinates[0] + 1, piece.coordinates[1] - 1],
  [piece.coordinates[0] - 1, piece.coordinates[1] + 1],
  [piece.coordinates[0] - 1, piece.coordinates[1] - 1],
  [piece.coordinates[0] + 1, piece.coordinates[1]],
  [piece.coordinates[0] - 1, piece.coordinates[1]],
  [piece.coordinates[0], piece.coordinates[1] + 1],
  [piece.coordinates[0], piece.coordinates[1] - 1]
]

export default getKingPossibleMoves
