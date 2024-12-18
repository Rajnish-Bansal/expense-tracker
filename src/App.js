import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./components/Homescreen";
import Input from "./components/Input";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Transactions from "./components/Transactions";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [cashBalance, setCashBalance] = useState(0);
  const [bankBalance, setBankBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <Router>
      <div className="container">
        <div className="app-container">
          <div className="header-route">
            <Header />
          </div>

          <div className="home-route"><Routes>
            <Route
              exact
              path="/"
              element={
                <Homescreen
                  totalBalance={totalBalance}
                  cashBalance={cashBalance}
                  bankBalance={bankBalance}
                  totalIncome={totalIncome}
                  totalExpense={totalExpense}
                  transactions={transactions}
                />
              }
            />

            <Route
              exact
              path="/Input"
              element={
                <Input
                  setTotalBalance={setTotalBalance}
                  setCashBalance={setCashBalance}
                  setBankBalance={setBankBalance}
                  setTotalIncome={setTotalIncome}
                  setTotalExpense={setTotalExpense}
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              }
            />
            <Route
              exact
              path="/Dashboard"
              element={
                <Dashboard
                  totalBalance={totalBalance}
                  totalIncome={totalIncome}
                  totalExpense={totalExpense}
                  transactions={transactions}
                />
              }
            />
            <Route
              exact
              path="/Transactions"
              element={<Transactions transactions={transactions} />}
            />
          </Routes></div>

          
          <div className="footer-route">
            <Footer />
          </div>
        </div>
        {/* <div className="app-container2">
          <Sidebar />
        </div> */}
      </div>
    </Router>
  );
}
export default App;
