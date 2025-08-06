import ActionButton from "./ActionButton";
import add from "../assets/icons/add.png"
import coin from "../assets/icons/coin.png"
import history from "../assets/icons/history.png"

function BalanceCard({ initialBalance }) {
    const balance = initialBalance ?? 0;

    const formattedBalance = balance.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div className="balance-card">
            <h3>Balance</h3>
            <h1>{formattedBalance}</h1>
            <div className="container-buttons">
                <ActionButton button="Send" imgURL={coin}/>
                <ActionButton button="Request" imgURL={add}/>
                <ActionButton button="History" imgURL={history}/>
            </div>
        </div>
    )
}

export default BalanceCard;