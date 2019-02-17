import React from 'react';

class Product extends React.Component {

    //write a function that sorts the items by match.
    render() {
        const item = this.props.item
        return (
            <div className="card mb-3 pb-3">
                <div className="card-header">
                    {item.name}
                </div>
                <div className="row pt-3">
                    <div className="col-4">
                        <img style={{width: 100, height: 100}} src={item.image} alt="product"/>                    
                    </div>
                    <div className="col-4">
                        <p>Price: {item.price}</p>
                        <p>Match: {(item.match * 100).toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}%</p>
                    </div>
                    <div className="col-4">
                        {/* dropdown in here of quantity and button that says add to cart */}
                        <form onSubmit={this.addToCart}>
                            <div className="form-group">
                                <label>Quantity: </label>
                                <select style={{ display: 'inline', width: 'auto', marginLeft: 5}} className="form-control" id="quantity">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <button className="btn btn-warning">Add to Cart</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }

    addToCart = e => {
        e.preventDefault();
        const quantity = document.getElementById("quantity").value;
        console.log(quantity);
        console.log("added!")

    }
}

export default Product;