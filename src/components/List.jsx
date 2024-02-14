import React from "react";
import "./List.css";

function List(props) {
  return (
    <div className="transaction-div">
      <div className="heading-div">
        <div className="h1">Recent Transactions</div>
        <div className="h2">See all</div>
      </div>
      {props.transactions.map((items, index) => (
        <li key={index} className="transaction-item">
          <div className="category-logo"></div>

          <div
            className="description-container"
            style={{ color: items.type === "Income" ? "green" : "red" }}
          >
            <div className="category-div">
              <span className="item-category">{items.category}</span>
              <span className="item-date">{items.date}</span>
            </div>
            <span className="item-description">{items.description}</span>
          </div>

          <div
            className="amount-container"
            style={{ color: items.type === "Income" ? "green" : "red" }}
          >
            <span className="item-mode">{items.mode}</span>
            <span className="item-amount">{"₹" + items.amount}</span>
          </div>
        </li>
      ))}
    </div>
  );
}

export default List;
