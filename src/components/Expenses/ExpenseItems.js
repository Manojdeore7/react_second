import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import Card from "../UI/card";
const ExpenseItems = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={props.title} amount={props.amount}></ExpenseDetail>
    </Card>
  );
};
export default ExpenseItems;
