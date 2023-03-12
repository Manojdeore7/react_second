import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={props.title} amount={props.amount}></ExpenseDetail>
    </div>
  );
}
export default ExpenseItems;
