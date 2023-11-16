import { AppContextProvider } from "./AppContext"
import Game from "./Game"

const App = () => (
  <AppContextProvider>
    <h1 className="text-center text-4xl font-bold py-7">
      Welcome to Chess game
    </h1>
    <Game />
  </AppContextProvider>
)

export default App
