import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./dashboard.css";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard({ totalBalance, totalIncome, totalExpense, transactions }) {
  // Group transactions by category
  const categoryData = transactions.reduce((acc, txn) => {
    if (!acc[txn.category]) {
      acc[txn.category] = 0;
    }
    acc[txn.category] += txn.amount;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const categories = Object.keys(categoryData);
  const amounts = Object.values(categoryData);

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="dashboard-component">
      <h2>Dashboard</h2>

      {/* Key Metrics */}
      <div className="metrics-div">
        <div className="metric">
          <h4>Total Balance</h4>
          <p style={{ color: totalBalance >= 0 ? "green" : "red" }}>
            ₹ {totalBalance}
          </p>
        </div>
        <div className="metric">
          <h4>Total Income</h4>
          <p style={{ color: "green" }}>₹ {totalIncome}</p>
        </div>
        <div className="metric">
          <h4>Total Expense</h4>
          <p style={{ color: "red" }}>₹ {totalExpense}</p>
        </div>
      </div>

      <div className="chart-container">
        <h3>Category-wise Expenses</h3>
        {categories.length > 0 ? (
          <div className="pie-chart">
            <Pie data={pieData} />
          </div>
        ) : (
          <p>No transactions available to display.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
