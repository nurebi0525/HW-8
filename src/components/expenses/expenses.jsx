import classes from "./expenses.module.css"

export const Expenses = (props) => {
  return (
    <ul className={classes.list}>
      {props.expenses.map((item) => {
        return <ExpenseItem {...item} key={item.id} />;
      })}
    </ul>
  );
};

const ExpenseItem = (props) => {
  return (
    <div className={classes.oneItem}>
      <ExpenseItemDate date={props.date} />
      <div className={classes.title}>{props.title}</div>
      <div className={classes.price}>{props.price}$</div>
    </div>
  );
};

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
