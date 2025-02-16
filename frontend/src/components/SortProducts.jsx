import React from 'react';

function SortProducts({ sortOrder, onSortChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Sort By:</label>
      <div className="select-wrapper">
        <select
          id="sort-select"
          value={sortOrder}
          onChange={onSortChange}
        >
          <option value="default">Default Sorting</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortProducts;
