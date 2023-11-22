import { useContext } from "react"
import AppContext from "./AppContext"
import clsx from "clsx"

const ListDeadPieces = ({ className }) => {
  const { state } = useContext(AppContext)
  const deadPieces = state.pieces.filter((piece) => piece.isDead)

  return (
    <div
      className={clsx(
        "my-5 border-t-4 border-b-4 border-black px-5",
        className
      )}>
      <h2 className="text-xl font-semibold ">Dead pieces</h2>
      <div className="flex flex-row flex-wrap">
        {deadPieces.map((piece) => (
          <img
            src={piece.image}
            alt={piece.name}
            key={piece.name}
            className="w-16 h-16"
          />
        ))}
      </div>
    </div>
  )
}

export default ListDeadPieces
