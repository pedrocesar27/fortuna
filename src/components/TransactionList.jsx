import TransactionItem from "./TransactionItem";
import transactions from "./transactions";

function createTransaction(transaction) {
    return (
        <div>
            <TransactionItem 
                iconURL={transaction.iconURL}
                name={transaction.name}
                day={transaction.day}
                value={transaction.value}   
            />
            <hr />
        </div>
    )
}

function TransactionList() {
    return (
        <div>
            <h2>Transactions</h2>
            {transactions.map(createTransaction)}
        </div>
    )
}

export default TransactionList;