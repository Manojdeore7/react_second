import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import Card from "../UI/card";
const ExpenseItems = (props) => {
  let [title, setTitle] = useState(props.title);

  let cliclHandler = () => {
    setTitle("updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={title} amount={props.amount}></ExpenseDetail>
      <button onClick={cliclHandler}>Click</button>
    </Card>
  );
};
export default ExpenseItems;
