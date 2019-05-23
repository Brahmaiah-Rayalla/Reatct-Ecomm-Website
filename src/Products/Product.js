import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    const imageUrl = require(`../static/${this.props.image}`);
    return (
      <div className="card">
        <div className="img">
          <img className="card-img-top" src={imageUrl} alt="Card image" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{this.props.productName}</h2>
          <p className="card-text">
            <h4>${this.props.productPrice}</h4>
          </p>
          <button className="btn btn-primary btn-lg" onClick={this.props.click}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
