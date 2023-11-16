const kingValidator = (coordinatesDiff) =>
  Math.abs(coordinatesDiff[1]) < 2 && Math.abs(coordinatesDiff[0]) < 2

export default kingValidator
