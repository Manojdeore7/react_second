import ExpenseItems from "./components/ExpenseItems";
import Card from "./components/card";
function App() {
  const expenses = [
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
  let arr = [];

  expenses.forEach((e) => {
    arr.push(
      <ExpenseItems
        title={e.title}
        date={e.date}
        amount={e.amount}
        LocationOfExpenditure={e.location}
      />
    );
  });

  return (
    <div>
      <h2>Expense Itoms</h2>
      <Card className="manoj">{arr}</Card>
    </div>
  );
}

export default App;
