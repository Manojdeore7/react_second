import "./newExpense.css";

function newExpense() {
  //   document.getElementById("date").addEventListener("onChange", (e) => {
  //     console.log(e.target.value);
  //   });
  let click = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter the Date</label>
          <input onChange={click} type="date" />
        </div>
        <div className="new-expense__control">
          <label>Enter The Expense Category</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Enter The Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default newExpense;
