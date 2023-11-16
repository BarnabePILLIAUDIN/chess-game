import { merge } from "@corex/deepmerge"
import { createContext, useCallback, useEffect, useState } from "react"
import initialiseState from "../utils/initialiseState"
import playFunction from "../utils/game/play"
import getWinnerIfThereIsOneTime from "../utils/helpers/getWinnerIfThereIsOneTime"

const AppContext = createContext()
export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialiseState)
  const timer = useCallback(() => {
    setState((prevState) => {
      if (!prevState.isStarted) {
        return prevState
      }

      const [hasWinner, winner] = getWinnerIfThereIsOneTime(
        prevState.whiteRemainingTime,
        prevState.blackRemainingTime
      )

      if (hasWinner) {
        clearInterval(state.timerInterval)

        return merge([prevState, { winner }])
      }

      const newState =
        prevState.currentTurn % 2 === 0
          ? {
              blackRemainingTime: prevState.blackRemainingTime - 1
            }
          : {
              whiteRemainingTime: prevState.whiteRemainingTime - 1
            }

      return merge([prevState, newState])
    })
  }, [])
  useEffect(() => {
    state.timerInterval = setInterval(timer, 1000)

    return clearUseEffect(state.timerInterval)
  }, [])
  const startGame = useCallback(() => {
    setState((prevState) => merge([prevState, { isStarted: true }]))
  }, [])
  const resetGame = useCallback(() => {
    setState(initialiseState)
  }, [])
  const play = useCallback((rowIndex, cellIndex) => {
    setState((prevState) => {
      const stateAfterPlay = playFunction(prevState, rowIndex, cellIndex)

      return stateAfterPlay
    })
  }, [])

  return (
    <AppContext.Provider
      value={{ state, play, startGame, resetGame }}
      {...props}
    />
  )
}

export default AppContext
const clearUseEffect = (interval) => () => {
  clearInterval(interval)
}
