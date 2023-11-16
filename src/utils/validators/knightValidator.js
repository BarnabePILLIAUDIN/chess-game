const knightValidator = (coordinatesDiff) =>
  (Math.abs(coordinatesDiff[0]) === 2 && Math.abs(coordinatesDiff[1]) === 1) ||
  (Math.abs(coordinatesDiff[0]) === 1 && Math.abs(coordinatesDiff[1]) === 2)

export default knightValidator
