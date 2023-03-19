import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/card";
import AddExpense from "./components/form/addExpense";
import Ffilter from "./components/Expenses/Ffilter";
import "./App.css";
const Arr = [
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

function App() {
  const [expenses, setExpenses] = useState(Arr);

  const saveHandler = (data) => {
    setExpenses((pre) => {
      return [data, ...pre];
    });
  };
  let [filterYear, setFilterYear] = useState("");
  let filterExpenses = expenses.filter((el) => {
    if (filterYear == "") {
      return el;
    }
    return el.date.getFullYear() == filterYear;
  });
  function onCheck(ele) {
    setFilterYear(ele);
  }

  let content = <diV className="data">Threre is no data present</diV>;
  if (filterExpenses.length > 0) {
    content = filterExpenses.map((e, i) => {
      return (
        <ExpenseItems key={i} title={e.title} date={e.date} amount={e.amount} />
      );
    });
  }

  return (
    <div>
      <h2>Expense Itoms</h2>

      <AddExpense onSaveData={saveHandler} />

      <Card className="manoj">
        <Ffilter check={onCheck}></Ffilter>
        {content}
      </Card>
    </div>
  );
}

export default App;
