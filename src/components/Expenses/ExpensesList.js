import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList( props ) {

  if (props.item.length === 0) {
    return (<h2 className="expenses-list__fallback">Nem található kiadás</h2>);
  }

  return(
      <ul className="expenses-list">
          {props.item.map((filteredExpense) => (
          <ExpenseItem key={filteredExpense.id} expense={filteredExpense} />
          ))}
      </ul>
  );
}

export default ExpensesList;