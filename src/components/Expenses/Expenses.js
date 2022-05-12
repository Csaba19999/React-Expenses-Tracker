import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFiter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.expenses;
  const [filter, setFilter] = useState("2020");

  const filterChangeHandeler = (filterEvent) => {
    setFilter(filterEvent);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onChangeFilter={filterChangeHandeler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
