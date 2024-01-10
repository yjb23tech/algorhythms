import pencil_icon from "../public/images/pencil_icon.png"
import trash_can_icon from "../public/images/trash_icon.png"
import heart_icon from "../public/images/heart_icon.png"
import comment_icon from "../public/images/comment_icon.png"

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
            <div className="algorhythms-row-description">

            </div>
            <div className="algorhythms-row-blank">

            </div>
            <div className="algorhythms-row-like-comment-text">
                <p>{props.algorhythms_num_of_likes}</p>
                <p>{props.algorhythms_num_of_comments}</p>
            </div>
            <div className="algorhythms-row-like-comment-icons">
                <img src={heart_icon} />
                <img src={comment_icon} />
            </div>
        </div>
    )
}

export default Card; 