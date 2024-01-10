import NavigationBar from "../components/NavigationBar";

const Dashboard = (props) => {
    return (
        <div>
            <NavigationBar 
                website_title = "Algorhythms"
                name_page_one = "Dashboard"
                name_page_two = "Explorer"
                name_page_three = "Account"
            />
        </div>
    )
}

export default Dashboard; 