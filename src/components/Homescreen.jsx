import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import List from "./List";
import "./homescreen.css";


function Homescreen(props) {
  const [outputTotalBalance, setOutputTotalBalance] = useState(props.totalBalance);
  const [outputTotalIncome, setOutputTotalIncome] = useState(props.totalIncome);
  const [outputTotalExpense, setOutputTotalExpense] = useState(props.totalExpense);
  const [outputCashBalance, setOutputCashBalance] = useState(props.cashBalance);
  const [outputBankBalance, setOutputBankBalance] = useState(props.bankBalance);

  return (
    
    <div className="homescreen-component">
      <Balance
        outputTotalBalance={outputTotalBalance}
        outputTotalIncome={outputTotalIncome}
        outputTotalExpense={outputTotalExpense}
        outputCashBalance={outputCashBalance}
        outputBankBalance={outputBankBalance}
      />
      <List transactions={props.transactions} />
    </div>
  );
}

export default Homescreen;
