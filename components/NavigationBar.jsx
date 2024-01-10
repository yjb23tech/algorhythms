import { Link } from "react-router-dom"
const NavigationBar = (props) => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar-logo-home nav-bar-fonts">
                <h3>{props.website_title}</h3>
            </div>
            <div className="nav-bar-page-options nav-bar-fonts util-box-border">
                <Link to={`/`} className="link-to-dashboard">
                    <p>{props.name_page_one}</p>
                </Link>
                <Link to={`/explorer`} className="link-to-explorer">
                    <p>{props.name_page_two}</p>
                </Link>
                <p>{props.name_page_three}</p>
            </div>
        </nav>
    )
}

export default NavigationBar; 