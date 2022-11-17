import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFIlter";

function Expenses({ expenses }) {
  const [filterYear, setfilterYear] = useState("2022");
  const filterHandler = (year) => {
    setfilterYear(year);
  };

  const filteredExpense = expenses.filter(
    (expense) => expense.date.slice(0, 4) === filterYear
  );

  let expenseData =
    filteredExpense.length === 0 ? (
      <p>No expenses found.</p>
    ) : (
      filteredExpense.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))
    );

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} />
      {expenseData}
    </Card>
  );
}

export default Expenses;
