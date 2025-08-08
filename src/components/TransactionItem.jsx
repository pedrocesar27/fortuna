function TransactionItem(props) {
    return (
        <div className="transaction-item">
            <img src={props.iconURL} alt="" />
            <div className="transaction-info">
                <h3>{props.name}</h3>
                <p>{props.day}</p>
            </div>
            <div className="transaction-amount">
                <h2>{props.value}</h2>
            </div>
        </div>
    )
}

export default TransactionItem;