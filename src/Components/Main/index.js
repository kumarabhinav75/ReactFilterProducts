import React, { Component } from 'react';
import Search from '../Search';
import ProductTable from '../ProductTable';

class Main extends Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <Search />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default Main;