import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
