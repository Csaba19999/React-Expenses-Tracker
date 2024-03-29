import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
function App() {

  const dummy_expenses = [
    {
      id: 'e1', 
      title: 'Autó biztosítás', 
      amount: 15000, 
      date: new Date(2022, 2, 28)
    },
    {
      id: 'e2', 
      title: 'bevásárlás', 
      amount: 19000, 
      date: new Date(2021, 2, 29)
    },
    {
      id: 'e3', 
      title: 'deichman', 
      amount: 20000, 
      date: new Date(2022, 2, 30)
    },
    {
      id: 'e4', 
      title: 'Alza.hu', 
      amount: 30000, 
      date: new Date(2021, 1, 12)
    },
    {
      id: 'e5', 
      title: 'Telefon számla', 
      amount: 11000, 
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e6', 
      title: 'bevásárlás Tesco', 
      amount: 50000, 
      date: new Date(2020, 3, 29)
    },
    {
      id: 'e7', 
      title: 'Auchan', 
      amount: 20000, 
      date: new Date(2020, 3, 30)
    },
    {
      id: 'e8', 
      title: 'Amazon.com PRIME', 
      amount: 6000, 
      date: new Date(2022, 1, 12)
    }
  ];

    const [expenses, setExpenses] = useState(dummy_expenses);

    const saveExpenseDataHandeler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      setExpenses(
        (prevExpenses) => {
          return [expenseData, ...prevExpenses];
        }
      );
    };

  return (
    <div>
        <NewExpense onSaveExpenseData={saveExpenseDataHandeler} />
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;