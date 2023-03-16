import React, { useState } from "react";
import "./newExpense.css";
function NewExpense() {
  // const [date, setDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");

  const [userInput, setUserInput] = useState({
    date: "",
    title: "",
    amount: "",
  });
  const enterDate = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };
  function enterTitle(e) {
    setUserInput({
      ...userInput,
      title: e.target.value,
    });
  }
  function enterAmount(e) {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
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
