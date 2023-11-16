// Return an array with a boolean that represent if there is a winner and a string with the color of the winner
const getWinnerIfThereIsOneTime = (whiteRemainingTime, blackRemainingTime) => {
  if (whiteRemainingTime < 1) {
    return [true, "black"]
  }

  if (blackRemainingTime < 1) {
    return [true, "white"]
  }

  return [false, ""]
}

export default getWinnerIfThereIsOneTime
