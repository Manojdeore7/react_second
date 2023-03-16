import React, { useState } from "react";
import "./newExpense.css";
function NewExpense() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const enterDate = (event) => {
    setDate(event.target.value);
  };
  function enterTitle(e) {
    setTitle(e.target.value);
  }
  function enterAmount(e) {
    setAmount(e.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter the Date</label>
          <input onChange={enterDate} type="date" />
        </div>
        <div className="new-expense__control">
          <label>Enter The Expense Category</label>
          <input type="text" onChange={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Enter The Amount</label>
          <input type="number" onChange={enterAmount} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default NewExpense;
