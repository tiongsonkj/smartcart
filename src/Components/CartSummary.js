import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions/actions';


class CartSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: 0,
            totalPrice: 0
        }

        store.subscribe(() => {
            this.setState({
                items: store.getState().cart.items,
                totalPrice: store.getState().cart.totalPrice
            })
        })
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <i className="fas fa-shopping-cart"/> Summary
                </div>
                <div className="pt-3">
                    <p>Items in cart: {this.state.items}</p>
                    <p>Total: ${this.state.totalPrice.toFixed(2)}</p>
                </div>
                <div className="pb-3">
                    <button onClick={this.props.clearCart} className="btn btn-success">Purchase</button>                    
                </div>
            </div>
        )
    }
}

export default connect(null, { clearCart })(CartSummary);
