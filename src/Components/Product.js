import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        }
    }
    
    render() {
        const item = this.props.item
        const price = parseFloat(item.price.slice(1,item.price.length));        
        return (
            <div className="card mb-3 pb-3">
                <div className="card-header">
                    {item.name}
                </div>
                <div className="row pt-3 item-body">
                    <div className="col-4 item-body-row">
                        <img className="product-image" src={item.image} alt="product"/>                    
                    </div>
                    <div className="col-4 item-body-row">
                        <p>Price: ${price.toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</p>                        
                        <p style={{marginBottom: 0}}>Match:</p>                        
                        <div className="progress" style={{ height: 25}}>
                            {this.progressBar(item.match)}
                        </div>
                    </div>
                    <div className="col-4 item-body-row">
                        <form onSubmit={this.addToCart}>
                            <div className="form-group">
                                <label>Quantity: </label>
                                <select onChange={this.onChange} style={{ display: 'inline', width: 'auto', marginLeft: 5}} className="form-control" id="quantity">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>
                            <button className="btn btn-warning">Add to Cart</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }

    onChange = e => {
        this.setState({ quantity: e.target.value})
    }

    addToCart = e => {
        e.preventDefault();
        const { item } = this.props;
        const quantity = parseInt(this.state.quantity);
        const priceOfItem = parseFloat(item.price.slice(1,item.price.length));  
        const multipliedPrice = quantity * priceOfItem;

        const data = {
            quantity,
            price: multipliedPrice
        }

        this.props.addToCart(data);
    }

    progressBar = match => {
        const matchPercent = match * 100;
        let progressColor = '';
        if (matchPercent < 25) {
            progressColor = "progress-bar bg-danger text-dark"
        } else if (matchPercent < 50) {
            progressColor = "progress-bar bg-warning"
        } else if (matchPercent < 75) {
            progressColor = "progress-bar bg-info"
        } else {
            progressColor = "progress-bar bg-success"
        }
        return (
            <div className={progressColor} role="progressbar" style={{width: `${matchPercent}%`, fontSize: 15}}>
                {matchPercent.toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}%
            </div>
        )
    }
}

export default connect(null, { addToCart })(Product);