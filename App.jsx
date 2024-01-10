import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar"

const App = () => {
    return (
        <div>
            <NavigationBar 
                website_title = "AlgoRhythms"
                name_page_one = "Dashboard"
                name_page_two = "Explorer"
                name_page_three = "Account"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)