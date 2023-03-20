import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/Card";
import AddExpense from "./components/form/addExpense";
import Ffilter from "./components/Expenses/Ffilter";
import "./App.css";
import Chart from "./components/chart/chart";
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
    date: new Date(2021, 11, 12),
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
  var [content2, setContent2] = useState(
    <div className="new-expense new-expense__actions ">
      <button className="btn" onClick={activation}>
        Add Expense
      </button>
    </div>
  );

  function activation() {
    content2 = <AddExpense onSaveData={saveHandler} />;
    setContent2(content2);
  }
  const saveHandler = (data) => {
    content2 = (
      <div className="new-expense new-expense__actions ">
        <button className="btn" onClick={activation}>
          Add Expense
        </button>
      </div>
    );
    setExpenses((pre) => {
      return [data, ...pre];
    });
    setContent2(content2);
  };
  let [filterYear, setFilterYear] = useState("");
  let filterExpenses = expenses.filter((el) => {
    if (filterYear === "") {
      return el;
    }
    return el.date.getFullYear().toString() === filterYear;
  });
  function onCheck(ele) {
    setFilterYear(ele);
  }
  //1
  let content = <diV className="data">Threre is no data present</diV>;
  //2
  if (filterExpenses.length === 1) {
    content = filterExpenses.map((e, i) => {
      return (
        <ExpenseItems key={i} title={e.title} date={e.date} amount={e.amount} />
      );
    });
    content.push(
      <diV className="data">Threre is only one data ,Pleease Add more!</diV>
    );
  }
  //3
  if (filterExpenses.length > 1) {
    content = filterExpenses.map((e, i) => {
      return (
        <ExpenseItems key={i} title={e.title} date={e.date} amount={e.amount} />
      );
    });
  }

  let allMonths = [
    { label: "JAN", value: 0 },
    { label: "FAB", value: 0 },
    { label: "MARCH", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JULY", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEPT", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  for (const exp of filterExpenses) {
    const ex = exp.date.getMonth();

    allMonths[ex].value = allMonths[ex].value + exp.amount;
  }

  return (
    <div>
      <h2>Expense Itoms</h2>

      {content2}

      <Card className="manoj">
        <Ffilter check={onCheck}></Ffilter>
        <Chart dataPoints={allMonths} />
        {content}
      </Card>
    </div>
  );
}

export default App;
