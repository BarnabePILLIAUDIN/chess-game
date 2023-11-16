import clsx from "clsx"
import getFormattedTime from "../utils/helpers/getFormattedTime"

const TimeDisplayer = ({ time, color, className, otherProps }) => (
  <p className={clsx("text-lg font-medium", className)} {...otherProps}>
    {color}: {getFormattedTime(time)}
  </p>
)

export default TimeDisplayer
