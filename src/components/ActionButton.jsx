import {Link} from "react-router-dom"

function ActionButtons(props) {
    return (
        <Link className="action-button">
            <img src={props.imgURL}/>
            <h3>{props.button}</h3>
        </Link>
    )
}

export default ActionButtons;