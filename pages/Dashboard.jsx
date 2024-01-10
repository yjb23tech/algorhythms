import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card.jsx"

const Dashboard = (props) => {
    return (
        <div>
            <NavigationBar 
                website_title = "Algorhythms"
                name_page_one = "Dashboard"
                name_page_two = "Explorer"
                name_page_three = "Account"
            />
            <Card 
                algorhythms_song_title = "Flashing Lights"
                algorhythms_song_description = "MBDTF"
                algorhythms_num_of_likes = "1 like"
                algorhythms_num_of_comments = "1 comment"
            />
        </div>
    )
}

export default Dashboard; 