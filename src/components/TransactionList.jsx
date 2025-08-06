import TransactionItem from "./TransactionItem";

function createTransaction(transaction) {
    return (
        <TransactionItem />
    )
}

function TransactionList() {
    return (
        <div>
            <h2>Transactions</h2>
            <TransactionItem />
            <hr />
            <TransactionItem />
            <hr />
            <TransactionItem />
            <hr />
        </div>
    )
}

export default TransactionList;