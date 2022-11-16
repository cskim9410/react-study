import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFIlter";

function Expenses({ expenses }) {
  const [filterYear, setfilterYear] = useState("");
  const filterHandler = (year) => {
    setfilterYear(year);
  };
  return (
    <Card className="expenses">
      <span>{filterYear}</span>
      <ExpensesFilter onFilter={filterHandler} />
      {expenses.map((item) => (
        <ExpenseItem item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
