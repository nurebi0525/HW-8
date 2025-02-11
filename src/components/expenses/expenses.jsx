import { useState } from "react";
import { ExpenseFilter } from "./expenseFIlter";
import classes from "./expenses.module.css"
import Button from "../UI/button";
import { Modal } from "../UI/modal";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [open, setOpen] =  useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);

  const modalHandler = (id) => {
    setOpen((prevState) => !prevState);
    if (id) {
      setDeletingItemId(id)
    }
  }
  // function for open the modal for delete

  const onDeleteExpense = () => {
    props.onDelete(deletingItemId);
    modalHandler();
  }
  // modal delete fuction if 'yes'

const yearChangeHandler = (event) => {
  setSelectedYear(event.target.value);
}
// берет значение инпута

const filteredExpanses = props.expenses.filter((item) => {
  if(item.date.getFullYear().toString() === selectedYear) {
    return true; 
  }
  return false;
});
// filtruet year 

const renderedExpenses = selectedYear === "All" ? props.expenses : filteredExpanses;
// All rabotalo

  return (
   <div>
    <Modal onClose={modalHandler} open={open} onSave={onDeleteExpense}>
      <h2>Вы точно хотите удалить?</h2>
                 <div>
                 <Button title="Да" onClick={onDeleteExpense}/>
                 <Button title="Нет"onClick={modalHandler}/>
                 </div>
    </Modal>
    <ExpenseFilter value={selectedYear} onChange={yearChangeHandler}/>
     <ul className={classes.list}>
      {renderedExpenses.map((item) => {
        return <ExpenseItem {...item} key={item.id} deleteHandler={modalHandler}/>;
      })}
    </ul>
   </div>
  );
};
// place were can change the year

const ExpenseItem = (props) => {
  return (
    <div className={classes.oneItem}>
      <ExpenseItemDate date={props.date} />
     <div style={{display: "flex", justifyContent: "space-between"}}>
     <div className={classes.title}>{props.title}</div>
     <div className={classes.price}>{props.price}$</div>
     <Button title="Delete" onClick={() => props.deleteHandler(props.id)}/>
     </div>
    </div>
  );
};
// button delete for click

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={classes.date}>
      <div className={classes.month}>{month}</div>
      <div className={classes.year}>{year}</div>
      <div className={classes.day}>{day}</div>
    </div>
  );
};
