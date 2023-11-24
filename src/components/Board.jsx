import clsx from "clsx"

import Cell from "./Cell"
import { useContext } from "react"
import AppContext from "./AppContext"
import { findPieceFromCoordinates } from "../utils/helpers/findPiece"

const Board = ({ handleClick, className }) => {
  const { state } = useContext(AppContext)

  return (
    <div
      className={clsx(
        "flex flex-wrap border-4 box-content w-96 border-black mx-auto",
        className
      )}>
      {state.board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          // As in the logic of the game the first row and column have id 1 we need to add 1 to the index of the array
          const cellPiece = findPieceFromCoordinates(
            state.pieces,
            rowIndex + 1,
            cellIndex + 1
          )
          const cellPieceColor = cellPiece && cellPiece.color
          const currentPlayerColor =
            // As the turn is 0 at the beginning of the game, the first player would be black
            // It's because we increment the turn at the end of the play function
            (state.currentTurn + 1) % 2 ? "black" : "white"
          const isCellPieceSelected = cellPiece
            ? state.selectedPieceName === cellPiece.name
            : false

          let isPossibleMove = false

          if (cellPieceColor !== currentPlayerColor) {
            // As you can't kill your own pieces, no need to highlight a cell where there is one of your pieces
            isPossibleMove = state.possibleMoves.some(
              ([x, y]) => x === rowIndex + 1 && y === cellIndex + 1
            )
          }

          return (
            <Cell
              isSelected={isCellPieceSelected}
              isPossibleMove={isPossibleMove}
              image={cellPiece && cellPiece.image}
              className={
                rowIndex % 2 === 0
                  ? "even:bg-orange-800 transition-all duration-1000"
                  : "odd:bg-orange-800 transition-all duration-500"
              }
              // As in the logic of the game the first row and column have id 1 we need to add 1 to the index of the array
              rowIndex={rowIndex + 1}
              cellIndex={cellIndex + 1}
              key={`${rowIndex + 1},${cellIndex + 1}`}
              handleClick={handleClick}
            />
          )
        })
      )}
    </div>
  )
}

export default Board
