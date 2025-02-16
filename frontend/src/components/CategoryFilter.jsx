import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">Shop by Category:</label>
      <div className="select-wrapper"> {/* Add wrapper for custom arrow */}
        <select
          id="category-select"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;
