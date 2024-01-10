import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Explorer from "./pages/Explorer.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/explorer" element={<Explorer />} />
                </Routes>
            </BrowserRouter> */}
            <Card 
                algorhythms_song_title = "Flashing Lights"
                algorhythms_song_description = "MBDTF"
                algorhythms_num_of_likes = "1 like"
                algorhythms_num_of_comments = "1 comment"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)