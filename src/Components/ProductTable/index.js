import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

const ProductTable = (props) => {
  const rows = [];
  let lastCategory = null;
  const searchText = props.searchText;
  const isStocked = props.isStocked;
  props.products.forEach((product) => {

    if(product.name.indexOf(searchText) === -1) {
      return;
    }
    if(isStocked && !product.stocked){
      return;
    }
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category = {product.category} key = {product.category} />
      );
    }
    rows.push(
      <ProductRow product = {product} key = {product.name} />
    );
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;