const NavigationBar = (props) => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar-logo-home nav-bar-fonts">
                <h3>{props.website_title}</h3>
            </div>
            <div className="nav-bar-page-options nav-bar-fonts util-box-border">
                <p>{props.name_page_one}</p>
                <p>{props.name_page_two}</p>
                <p>{props.name_page_three}</p>
            </div>
        </nav>
    )
}

export default NavigationBar; 