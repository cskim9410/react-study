import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseData = (saveExpenseData) => {
    const expenseData = { ...saveExpenseData };
    // console.log(expenseData);
    props.onExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
