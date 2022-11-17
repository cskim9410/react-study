import { useState } from "react";
import ExpensesList from "./ExpensesList";
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

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;
