import clsx from "clsx"

const Cell = ({
  image,
  className,
  handleClick,
  rowIndex,
  cellIndex,
  isSelected,
  isPossibleMove,
  otherProps
}) => (
  <div
    className={clsx(
      "w-12 h-12 border border-black",
      isSelected && "!bg-red-600",
      isPossibleMove && "!bg-green-300",
      className
    )}
    onClick={handleClick(rowIndex, cellIndex)}
    {...otherProps}>
    {image && <img src={image} />}
  </div>
)

export default Cell
