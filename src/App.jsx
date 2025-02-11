import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/expenseForm/expenseForm";
import { Expenses } from "./components/expenses/expenses";
import { Modal } from "./components/UI/modal";
import Button from "./components/UI/button";

const expensesData = [];
// lifting up

function App() {
  const [expenses, setExpenses] = useState(expensesData);
  const [modal, setModal] = useState(false);

  function modalHadlear(){
    setModal((prevState) => !prevState);
  }
  //modal of form

  function addExpenseHandler(param) {
    const updateExpense = [...expenses, param];

    setExpenses(updateExpense);
    modalHadlear()
  }
  function  deleteExpenseHandler(id) {
    const filteredExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(filteredExpenses)
  }
  // after delete filter and re-rendering  code
  return (
    <div className="container">
      <Modal open={modal} onClose={modalHadlear} >
      <ExpenseForm onAdd={addExpenseHandler} />
      </Modal>
      {!modal && <Button title="Add expense" onClick={modalHadlear}/> }
      {/* click to button and write your expense  */}
      <Expenses expenses={expenses} onDelete={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
