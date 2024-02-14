import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [inputType, setInputType] = useState("null");
  const [inputDate, setInputDate] = useState();
  const [inputPaymentMode, setinputPaymentMode] = useState("Cash");
  const [inputCategory, setinputCategory] = useState("Travel");
  const [inputAmount, setinputAmount] = useState();
  const [inputDescription, setinputDescription] = useState();
  const [alert, setAlert] = useState();

  const newTransaction = [
    {
      type: inputType,
      date: inputDate,
      mode: inputPaymentMode,
      category: inputCategory,
      amount: inputAmount,
      description: inputDescription,
    },
  ];

  const handleInputAmountChange = (e) => {
    setinputAmount(e.target.value);
    setAlert("");
  };

  const submit = () => {
    if (inputAmount !== "") {
      if (inputType !== "Income") {
        props.setTotalBalance((total) => total - parseFloat(inputAmount));
        props.setTotalExpense((expense) => expense + parseFloat(inputAmount));
        if (inputPaymentMode !== "Cash") {
          props.setBankBalance((amount) => amount - parseFloat(inputAmount));
        } else {
          props.setCashBalance((amount) => amount - parseFloat(inputAmount));
        }
      } else {
        props.setTotalBalance((total) => total + parseFloat(inputAmount));
        props.setTotalIncome((income) => income + parseFloat(inputAmount));
        if (inputPaymentMode !== "Bank") {
          props.setCashBalance((amount) => amount + parseFloat(inputAmount));
        } else {
          props.setBankBalance((amount) => amount + parseFloat(inputAmount));
        }
      }

      props.setTransactions([...props.transactions, ...newTransaction]);
      setAlert("Transaction added Sucessfully !!");

      setinputAmount("");
      setinputCategory("Travel");
      setinputDescription("");
      setinputPaymentMode("Cash");
      setInputDate("");

      console.log(props.settotalBalance);
    }
    // setAlert('Please fill details !')
  };

  const reset = () => {
    setinputAmount("");
    setinputCategory("Travel");
    setinputDescription("");
    setinputPaymentMode("Cash");
    setInputDate("");
    setAlert("");
    props.setTransactions([]);
    props.setTotalBalance(0);
    props.setTotalIncome(0);
    props.setTotalExpense(0);
    props.setCashBalance(0);
    props.setBankBalance(0);
  };

  return (
    <div className="input-component">
      <div className="input-div">
        <div className="transactionType">
          <div className="income-radio">
            <input
              name="type"
              type="radio"
              value="Income"
              // checked
              checked={inputType === "Income"}
              onChange={() => {
                setInputType("Income");
                setAlert("");
              }}
            />
            Income
          </div>
          <div className="expense-radio">
            <input
              name="type"
              type="radio"
              value="Expense"
              checked={inputType === "Expense"}
              onChange={() => {
                setInputType("Expense");
                setAlert("");
              }}
            />
            Expense
          </div>
        </div>

        <div className="date-div">
          <span className="input-title">Date : </span>
          <input
            type="date"
            className="input"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
              setAlert("");
            }}
          ></input>
        </div>

        <div className="transactionMode">
          <span className="input-title">Payment Mode : </span>
          <select
            className="input"
            value={inputPaymentMode}
            onChange={(e) => {
              setinputPaymentMode(e.target.value);
              setAlert("");
            }}
          >
            <option id="mode" value="Cash">
              Cash
            </option>
            <option id="mode" value="Bank">
              Bank
            </option>
          </select>
        </div>

        <div className="category">
          <span className="input-title">Category : </span>
          <select
            className="input"
            value={inputCategory}
            onChange={(e) => {
              setinputCategory(e.target.value);
              setAlert("");
            }}
          >
            <option value="Travel">Travel</option>
            <option value="Food">Food </option>
            <option value="Hotel">Hotel</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className="input-amount">
          <span className="input-title">Amount : </span>
          <input
            type="number"
            placeholder="Amount in ₹"
            className="input"
            onChange={handleInputAmountChange}
            value={inputAmount}
          ></input>
        </div>

        <div className="description">
          <span className="input-title">Description: </span>
          <input
            type="text"
            placeholder="Write description"
            className="input"
            value={inputDescription}
            onChange={(e) => {
              setinputDescription(e.target.value);
              setAlert("");
            }}
          ></input>
        </div>

        <div className="submit-button-div">
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
          <button className="submit-button" onClick={submit}>
            Submit
          </button>
        </div>

        <div className="alert-div">{alert}</div>
      </div>
    </div>
  );
}

export default Input;

// useEffect(() => {
//   setAmountInParent(totalBalance);
//   setTransactionsInParent(transactionList);
//   setIncomeInParent(totalIncome);
//   setExpenseInParent(totalExpense);
//   setBankBalanceInParent(bankBalance);
//   setCashBalanceInParent(cashBalance);
// }, [
//   totalBalance,
//   setAmountInParent,
//   setTransactionsInParent,
//   setInputDate,
//   setinputCategory,
//   setinputDescription,
//   transactionList,
// ]);

// const [transactionList, setTransactionList] = useState([]);
// const [totalBalance, settotalBalance] = useState(0);
// const [cashBalance, setCashBalance] = useState(0);
// const [bankBalance, setBankBalance] = useState(0);
// const [totalIncome, setTotalIncome] = useState(0);
// const [totalExpense, setTotalExpense] = useState(0);
