import { createRoot } from "react-dom/client"
import App from "./components/App"
import { StrictMode } from "react"

const rootElement = document.querySelector("#app")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
