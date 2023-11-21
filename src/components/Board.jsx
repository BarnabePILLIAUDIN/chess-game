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
          const isCellPieceSelected = cellPiece
            ? state.selectedPieceName === cellPiece.name
            : false

          return (
            <Cell
              isSelected={isCellPieceSelected}
              image={cellPiece && cellPiece.image}
              className={
                rowIndex % 2 === 0 ? "even:bg-orange-800" : "odd:bg-orange-800"
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
