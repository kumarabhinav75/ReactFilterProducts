import React from 'react';

const ProductRow = (props) => {
  const product = props.product;
  const name = product.stocked? product.name : 
  <span style={{color: 'red'}}>
  {product.name}
  </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
ProductRow.defaultProps = {
  name: 'Unnamed',
  price: '$0',
  stocked: true,
}
export default ProductRow;