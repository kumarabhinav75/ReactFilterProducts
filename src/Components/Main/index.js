import React, { Component } from 'react';
import Search from '../Search';
import ProductTable from '../ProductTable';

class Main extends Component {
    state = {
      searchText : '',
      isStocked : false,
    };

    onSearchTextChange = (searchText) => {
        this.setState({
          searchText,
        });
    }

    onStockStateChange = (isStocked) => {
      this.setState({
        isStocked,
      });
    }
  
  render() {
    const products = this.props.products;
    console.log(this.state);
    return (
      <div>
        <Search 
        searchText = {this.state.searchText}
        isStocked = {this.state.isStocked}
        onSearchTextChange = {this.onSearchTextChange}
        onStockStateChange = {this.onStockStateChange}
        />

        <ProductTable 
        products={products} 
        searchText = {this.state.searchText}
        isStocked = {this.state.isStocked}
        />
      </div>
    );
  }
}

export default Main;