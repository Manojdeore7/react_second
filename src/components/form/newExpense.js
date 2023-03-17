import React, { useState } from "react";
import "./newExpense.css";
function NewExpense(props) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const enterDate = (e) => {
    setDate(e.target.value);
  };
  function enterTitle(e) {
    setTitle(e.target.value);
  }
  function enterAmount(e) {
    setAmount(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    let obj = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    props.onSaveData(obj);
    setDate("");
    setAmount("");
    setTitle("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter the Date</label>
          <input onChange={enterDate} value={date} type="date" />
        </div>
        <div className="new-expense__control">
          <label>Enter The Expense Category</label>
          <input type="text" onChange={enterTitle} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Enter The Amount</label>
          <input type="number" onChange={enterAmount} value={amount} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpense;
