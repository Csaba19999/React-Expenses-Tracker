import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expense = props.expense;
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={expense.date}/>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.amount} Ft</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
