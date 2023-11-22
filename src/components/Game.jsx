import { useCallback, useContext } from "react"
import Board from "./Board"
import AppContext from "./AppContext"
import Button from "./Button"
import CenterButton from "./CenterButton"
import TimeDisplayer from "./TimeDisplayer"
import ListDeadPieces from "./ListDeadPieces"

const Game = () => {
  const { state, play, startGame, resetGame } = useContext(AppContext)
  const handleClick = useCallback(
    (rowIndex, cellIndex) => () => {
      play(rowIndex, cellIndex)
    },
    []
  )

  return (
    <div>
      {state.isStarted ? (
        <>
          {state.winner ? (
            <p className="text-4xl font-bold text-center mb-5 uppercase">
              The winner is {state.winner}
            </p>
          ) : (
            <>
              <div className="flex flex-col items-center w-screen gap-2 my-5">
                <h2 className="text-xl font-bold ">Remaining time</h2>
                <TimeDisplayer time={state.whiteRemainingTime} color="White" />
                <TimeDisplayer time={state.blackRemainingTime} color="Black" />
              </div>

              <p className="text-center font-semibold text-xl">
                Turn {state.currentTurn}:{" "}
                {state.currentTurn % 2 === 0 ? "Black " : "White"}{" "}
                {state.isAPieceSelected ? "Select a cell" : "Select a piece"}
              </p>
            </>
          )}

          <Board handleClick={handleClick} />
          <ListDeadPieces />
          <CenterButton>
            <Button color="orange" onClick={resetGame}>
              Reset the game
            </Button>
          </CenterButton>
        </>
      ) : (
        <CenterButton className={"Hello"}>
          <Button onClick={startGame}>Start the game</Button>
        </CenterButton>
      )}
    </div>
  )
}

export default Game
