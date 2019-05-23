import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar/NavBar";
import Product from "./Products/Product";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

class App extends React.Component {
  state = {
    products: [
      {
        name: "Samsumn Galaxy",
        price: 300,
        img: "SAMSUNG_Galaxy.png"
      },
      { name: "Motorola", price: 100, img: "Moto.jfif" },
      { name: "IPhone XS", price: 500, img: "iphone-xs.jfif" },
      { name: "OnePlus", price: 350, img: "OnePlus.jpg" },
      { name: "Nokia", price: 70, img: "Nokia.jpg" },
      { name: "RedMe", price: 50, img: "Redme.jpg" }
    ],
    count: 0,
    totalAmount: 0
  };

  addToCart = price => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ totalAmount: this.state.totalAmount + price });
  };

  render() {
    return (
      <div className="App">
        <NavBar count={this.state.count} totalAmount={this.state.totalAmount} />
        <div className="card-columns">
          <ul>
            {this.state.products.map((product, index) => (
              <Product
                key={index}
                productName={product.name}
                productPrice={product.price}
                image={product.img}
                click={this.addToCart.bind(this, product.price)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
