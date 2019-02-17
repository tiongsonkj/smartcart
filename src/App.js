import React, { Component } from 'react';
import data from './api_payload.json';
import './App.css';
import Product from './Components/Product';
import CartSummary from './Components/CartSummary';

class App extends Component {
  render() {
    const products = data.product_list;
    console.log(products);
    console.log(this.sortProducts());
    return (
      <div className="App">
        <h1>Please pick a product you would like to purchase!</h1>
        {/* load in all of json data */}
        <div className="container">
          <div className="row">
            <div className="col-8 product-section">
              {products.map((product, index) => (
                <Product key={index} item={product} />
              ))}
            </div>
            <div className="col-4 checkout-card">
              <CartSummary/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  sortProducts = () => {
    const products = data.product_list;
    console.log(products);
    const newArray = [];
    return newArray;
  }
}

export default App;
