import getImageUrl from "./helpers/getImageUrl"

const generatePiece =
  (color) =>
  ({ name, coordinates, validator }) => ({
    name,
    image: getImageUrl(name),
    coordinates,
    isDead: false,
    color,
    hasBeenPlayed: false,
    validator
  })

export const generateBlackPiece = generatePiece("black")
export const generateWhitePiece = generatePiece("white")
