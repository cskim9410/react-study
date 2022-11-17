import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const expenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);
  const onExpenseHandler = (data) => {
    const newExpenseData = data;
    console.log(newExpenseData);

    setExpenses((current) => {
      // const newExpenses = [...current];
      // newExpenses.push(data);
      // return newExpenses;
      return [data, ...current];
    });
  };

  return (
    <div>
      <NewExpense onExpenseHandler={onExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
