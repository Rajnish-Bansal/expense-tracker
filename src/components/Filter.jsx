import React from "react";

function Filter() {
  return (
    <div className="filter-div">
      <div className="filter-type">
        <select
          className="income-filter"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All" selected>
            Income/Expense
          </option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div className="filter-category">
        <select
          className="category-options"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option selected value="All Category">
            All Category
          </option>
          <option>Travel</option>
          <option>Food</option>
          <option>Hotel</option>
          <option>Entertainment</option>
        </select>
      </div>
      <div className="filter-date">Date</div>
    </div>
  );
}

export default Filter;