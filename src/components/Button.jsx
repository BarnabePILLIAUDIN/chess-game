import clsx from "clsx"

const colors = {
  blue: {
    bg: "blue-500",
    border: "blue-900",
    active: "blue-700"
  },
  orange: {
    bg: "orange-500",
    border: "orange-900",
    active: "orange-700"
  }
}
const Button = ({ children, className, color = "blue", ...otherProps }) => (
  <button
    className={clsx(
      `border-2 border-${colors[color].border} px-2 py-1 rounded-md text-white bg-${colors[color].bg} hover:bg-${colors[color].hover} active:bg-${colors[color].active} text-xl`,
      className
    )}
    {...otherProps}>
    {children}
  </button>
)
export default Button
