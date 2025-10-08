import { createContext } from "react"
import type { AppContextType } from "./AppState"

const AppContext = createContext<AppContextType | null>(null)

export default AppContext
