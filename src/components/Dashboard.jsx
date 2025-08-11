// src/pages/Dashboard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import RequestCard from "../components/RequestCard";
import "../styles/global.css"; // seus estilos existentes

export default function Dashboard() {
  const [showRequest, setShowRequest] = useState(false);

  const balanceVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.4 } }
  };

  const requestVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: "100%", opacity: 0 }
  };

  const listVariants = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <main>
        <AnimatePresence mode="wait">
            {!showRequest && (
                <motion.div
                key="balance"
                variants={balanceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <BalanceCard initialBalance={0} onRequest={() => setShowRequest(true)} />
                </motion.div>
            )}

            {showRequest && (
                <motion.div
                key="request"
                variants={requestVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="request-card"
                >
                <RequestCard onClose={() => setShowRequest(false)} onSubmit={() => { setShowRequest(false); }} />
                </motion.div>
            )}
        </AnimatePresence>

        <motion.div
            variants={listVariants}
            animate={showRequest ? "hidden" : "visible"}
        >
            <TransactionList />
        </motion.div>
    </main>
  );
}
