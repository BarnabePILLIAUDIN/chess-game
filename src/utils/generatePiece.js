import { COLORS } from "../constants"
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

export const generateBlackPiece = generatePiece(COLORS.BLACK)
export const generateWhitePiece = generatePiece(COLORS.WHITE)
