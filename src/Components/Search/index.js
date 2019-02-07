import React from 'react';

const Search = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
      <input type="checkbox" />
      Only show products in stock
      </p>
    </form>
  );
}

export default Search;