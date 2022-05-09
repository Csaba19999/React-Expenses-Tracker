import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expense = props.expense;
  const [title, setTitle] = useState(expense.title);
  
  const clickHandeler = () =>{
    setTitle("Updated title");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense.amount} Ft</div>
      </div>
      <button className="expense-item__price" onClick={clickHandeler}>módosítás</button>
    </Card>
  );
}

export default ExpenseItem;
