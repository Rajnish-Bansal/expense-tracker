import React from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";

function List(props) {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate("/transactions"); // Route to the transactions page
  };

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
    <div className="transaction-div">
      <div className="heading-div">
        <div className="h1">Recent Transactions</div>
        <div
          className="h2"
          onClick={handleSeeAll}
          style={{ cursor: "pointer" }}
        >
          See all
        </div>
      </div>
      <div className="li-transaction-div">
        {props.transactions.length === 0 ? (
          <div className="no-transaction-div">No transactions !!</div>
        ) : (
          props.transactions.map((items, index) => (
            <li key={index} className="transaction-item">
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

export default List;
