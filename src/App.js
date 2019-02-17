import React, { Component } from 'react';
import data from './api_payload.json';
import './App.css';
import Product from './Components/Product';
import CartSummary from './Components/CartSummary';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    const sortedProducts = this.sortProducts();
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Please pick a product you would like to purchase!</h1>
          <div className="container">
            <div className="row">
              <div className="col-8 product-section">
                {sortedProducts.map((product, index) => (
                  <Product key={index} item={product} />
                ))}
              </div>
              <div className="col-4 checkout-card">
                <CartSummary/>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }

  sortProducts = () => {
    const products = data.product_list;
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products.length - i - 1; j++) {
        if (products[j].match < products[j + 1].match) {
          [products[j].match, products[j + 1].match] = [products[j+1].match, products[j].match];
        }
      }
    }
    return products;
  }
}

export default App;
