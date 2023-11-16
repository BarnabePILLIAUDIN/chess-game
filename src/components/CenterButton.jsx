import clsx from "clsx"

const CenterButton = ({ children, className, otherProps }) => (
  <div
    className={clsx("mt-5 flex flex-row justify-center", className)}
    {...otherProps}>
    {children}
  </div>
)

export default CenterButton
