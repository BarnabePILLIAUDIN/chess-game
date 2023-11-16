const rookValidator = (coordinatesDiff) =>
  Number.parseInt(coordinatesDiff[0], 10) === 0 ||
  Number.parseInt(coordinatesDiff[1], 10) === 0

export default rookValidator
