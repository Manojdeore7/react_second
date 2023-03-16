import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import Card from "../UI/card";
const ExpenseItems = (props) => {
  let cliclHandler = () => {
    console.log("clicked!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={props.title} amount={props.amount}></ExpenseDetail>
      <button onClick={cliclHandler()}>Click</button>
    </Card>
  );
};
export default ExpenseItems;
