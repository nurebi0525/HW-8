import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/expenseForm/expenseForm";
import { Expenses } from "./components/expenses/expenses";

const expensesData = [];
// lifting up

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  function addExpenseHandler(param) {
    const updateExpense = [...expenses, param];

    setExpenses(updateExpense);
  }
  return (
    <div className="container">
      <ExpenseForm onAdd={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
