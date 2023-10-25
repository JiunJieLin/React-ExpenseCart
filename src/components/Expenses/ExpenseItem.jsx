import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);

  const clickHandler = () => {
    setTitle("up");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
