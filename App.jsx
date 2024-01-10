import { createRoot } from "react-dom/client"
import Dashboard from "./pages/Dashboard.jsx"

const App = () => {
    return (
        <div>
            <Dashboard />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)