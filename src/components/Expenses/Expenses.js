import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}
export default Expenses;
