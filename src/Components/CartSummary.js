import React from 'react';

class CartSummary extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Summary
                </div>
                <div className="pt-3">
                    <p>Items in cart: 0</p>
                    <p>Total: $0.00</p>
                </div>
            </div>
        )
    }
}

export default CartSummary;