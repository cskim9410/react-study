import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFIlter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filterYear, setfilterYear] = useState("2022");
  const filterHandler = (year) => {
    setfilterYear(year);
  };

  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;
