import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    if (onCategoryChange) {
      onCategoryChange(event);
    }
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
