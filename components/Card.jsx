import pencil_icon from "../public/images/pencil_icon.png"
import trash_can_icon from "../public/images/trash_icon.png"

const Card = (props) => {
    return (
        <div className="algorhythms-card">
            <div className="algorhythms-row-title">
                <h2 className="algorhythms-song-title">{props.algorhythms_song_title}</h2>
                <div className="row-pencil-trash-icons">
                    <img src={pencil_icon} />
                    <img src={trash_can_icon} />
                </div>
            </div>
            {/* <div className="algorhythms-row-description">

            </div>
            <div className="algorhythms-row-blank">

            </div>
            <div className="algorhythms-row-like-comment-text">

            </div>
            <div className="algorhythms-row-like-comment-icons">

            </div> */}
        </div>
    )
}

export default Card; 