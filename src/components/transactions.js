import personTransaction from "../assets/icons/personTransaction.png"
import logo from "../assets/icons/logo.png"
import receiptTransaction from "../assets/icons/receiptTransaction.png"
import cardTransaction from "../assets/icons/cardTransaction.png"

const transactions = [
    {
        iconURL: personTransaction,
        name:"Carlos",
        day:"Today",
        value:"-50,00",
    },
    {
        iconURL: cardTransaction,
        name:"EcoMart",
        day:"Yesterday",
        value:"-32,00",
    },
    {
        iconURL: receiptTransaction,
        name:"DigiCom",
        day:"Yesterday",
        value:"-15,00",
    },
    {
        iconURL: logo,
        name:"Deposit",
        day:"Yesterday",
        value:"+1.200,00",
    }
]

export default transactions;