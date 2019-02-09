import React from 'react';

const Search = (props) => {

    const handleSearchTextChange = (e) => {
      console.log(e.target.value);
      console.log('calling onSearchTextChange');
      props.onSearchTextChange(e.target.value);
    }

    const handleStockStateChange = (e) => {
      props.onStockStateChange(e.target.checked);
    }
  return (
    <form>
      <input type="text" placeholder="Search..."
      value = {props.searchText} 
      onChange= {handleSearchTextChange}
      />
      <p>
      <input type="checkbox" 
      checked = {props.isStocked}
      onChange = {handleStockStateChange}
      />
      Only show products in stock
      </p>
    </form>
  );
}

export default Search;