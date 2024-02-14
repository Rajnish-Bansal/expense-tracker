import React, { useState } from "react";
import "./Balance.css";

function Balance(props) {
  return (
    <div className="balance-component">
      <div className="incomeTotal-div">
        <div className="title">Income</div>
        <div className="amount">{"₹" + props.outputTotalIncome}</div>
      </div>

      <div className="balance-div">
        <div className="balance-title">Balance</div>

        <div
          className="totalBalance"
          style={{ color: props.outputTotalBalance >= 0 ? "green" : "red" }}>
          {"₹" + props.outputTotalBalance}
        </div>

        <div className="balance-amount">
          <div className="cash">
            <div className="balanceType">Cash :</div>
            <div
              className="balanceType-amount"
              style={{ color: props.outputCashBalance >= 0 ? "green" : "red" }}
            >
              {"₹" + props.outputCashBalance}
            </div>
          </div>

          <div className="bank">
            <div className="balanceType">Bank : </div>
            <div
              className="balanceType-amount"
              style={{ color: props.outputBankBalance >= 0 ? "green" : "red" }}
            >
              {"₹" + props.outputBankBalance}
            </div>
          </div>
        </div>
      </div>

      <div className="expenseTotal-div">
        <div className="title">Expense</div>
        <div className="amount">{"₹" + props.outputTotalExpense}</div>
      </div>
    </div>
  );
}

export default Balance;
