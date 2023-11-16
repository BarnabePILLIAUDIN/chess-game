import bishopValidator from "./bishopValidator"
import rookValidator from "./rookValidator"

const queenValidator = (coordinatesDiff) =>
  bishopValidator(coordinatesDiff) || rookValidator(coordinatesDiff)

export default queenValidator
