const NavigationBar = (props) => {
    return (
        <nav>
            <div className="nav-bar-logo-home">
                <h1>{props.website_title}</h1>
            </div>
            <div className="nav-bar-page-options">
                <p>{props.name_page_one}</p>
                <p>{props.name_page_two}</p>
                <p>{props.name_page_three}</p>
            </div>
        </nav>
    )
}

export default NavigationBar; 