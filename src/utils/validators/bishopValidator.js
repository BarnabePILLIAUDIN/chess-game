const bishopValidator = (coordinatesDiff) =>
  Math.abs(coordinatesDiff[0]) === Math.abs(coordinatesDiff[1])

export default bishopValidator
