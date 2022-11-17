import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [active, setActive] = useState(false);
  const onSaveExpenseData = (saveExpenseData) => {
    const expenseData = { ...saveExpenseData };
    // console.log(expenseData);
    props.onExpenseHandler(expenseData);
  };
  const cancelHandler = (bool) => {
    setActive(bool);
  };
  let inputForm = active ? (
    <ExpenseForm
      onCancel={cancelHandler}
      onSaveExpenseData={onSaveExpenseData}
    />
  ) : (
    <button onClick={() => setActive(!active)}>Add New Expense</button>
  );
  return <div className="new-expense">{inputForm}</div>;
};

export default NewExpense;
