import ActionButton from "./ActionButton";
import add from "../assets/icons/add.png"
import coin from "../assets/icons/coin.png"
import history from "../assets/icons/history.png"

function BalanceCard({ initialBalance = 0, onRequest }) {
    const formatted = (initialBalance ?? 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <div className="balance-card">
            <h3>Balance</h3>
            <h1>{formatted}</h1>
            <div className="container-buttons">
                <ActionButton button="Send" imgURL={coin} onClick={() => console.log("send")} />
                <ActionButton button="Request" imgURL={add} onClick={onRequest} />
                <ActionButton button="History" imgURL={history} onClick={() => console.log("history")}/>
            </div>
        </div>
    )
}

export default BalanceCard;