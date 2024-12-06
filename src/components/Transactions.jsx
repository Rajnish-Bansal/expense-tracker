import React from "react";
import "./transactions.css";

function Transactions({ transactions }) {
  const getCategoryLogo = (category) => {
    switch (category) {
      case "Travel":
        return "🚗";
      case "Food":
        return "🍔";
      case "Entertainment":
        return "🎉";
      default:
        return "💰";
    }
  };

  return (
    <div className="transactions-route-page">
      <h3>All Transactions</h3>
      <div className="transactions-route-list">
        {transactions.length === 0 ? (
          <p>No transactions available !!</p>
        ) : (
          transactions.map((items, index) => (
            <li key={index} className="transactions-route-item">
              <div className="category-logo">
                <span className="logo">{getCategoryLogo(items.category)}</span>
              </div>
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
          ))
        )}
      </div>
    </div>
  );
}

export default Transactions;
