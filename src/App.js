import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/card";
import AddExpense from "./components/form/addExpense";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 11, 14),
      location: "Toilet",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "news",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "showroom",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "IT",
    },
  ];
  let [Arr, expFun] = useState(expenses);
  function saveHandler(data) {
    expenses = Arr;
    expenses.push(data);
    console.log(expenses);
    expFun(expenses);
  }
  let arr = [];

  Arr.forEach((e) => {
    arr.push(<ExpenseItems title={e.title} date={e.date} amount={e.amount} />);
  });

  return (
    <div>
      <h2>Expense Itoms</h2>
      <AddExpense onSaveData={saveHandler} />
      <Card className="manoj">{arr}</Card>
    </div>
  );
}

export default App;
