// src/components/RequestCard.jsx
function RequestCard({ onClose, onSubmit }) {
    return (
        <div className="request-card">
            <h3>Request Payment</h3>
            <form
                className="request-payment"
                onSubmit={(e) => {
                e.preventDefault();
                onSubmit?.();
                }}
            >
                <label>
                Type
                <select name="type" required>
                    <option value="">Select type</option>
                    <option value="payment">Payment</option>
                    <option value="refund">Refund</option>
                </select>
                </label>

                <label>
                Recipient
                <input name="recipient" placeholder="Name or email" required />
                </label>

                <label>
                Amount
                <input
                    name="amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    required
                />
                </label>

                <div className="form-buttons">
                <button type="button" className="cancel-btn" onClick={onClose}>
                    Cancel
                </button>
                <button type="submit" className="submit-btn">
                    Request
                </button>
                </div>
            </form>
        </div>
    );
}


export default RequestCard;