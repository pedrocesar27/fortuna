function ActionButtons(props) {
    return (
        <button className="action-button" onClick={props.onClick} type="button">
            <img src={props.imgURL} alt=""/>
            <h3>{props.button}</h3>
        </button>
    )
}

export default ActionButtons;