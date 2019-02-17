import React from 'react';
import data from './api_payload.json';
import Product from './Components/Product';
import CartSummary from './Components/CartSummary';

class Main extends React.Component {
    render() {
    const sortedProducts = this.sortProducts();
    return (
        <>
            <h1>Please add a product you would like to purchase!</h1>
            <div className="container">
                <div className="row main-section-container">
                    <div id="product-section" className="col-8">
                        {sortedProducts.map((product, index) => (
                            <Product key={index} item={product} />
                        ))}
                    </div>
                    <div id="summary-card" className="col-4">
                        <CartSummary/>
                    </div>
                </div>
            </div>
        </>
        )
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

export default Main;