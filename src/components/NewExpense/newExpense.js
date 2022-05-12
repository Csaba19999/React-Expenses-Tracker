import './NewExpense.css';
import React, {useState} from 'react';
import OpenNewExpense from './OpenNewExpense';

function NewExpense( props ) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmout, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [newExpenseVisible, setNewExpenseVisible] = useState(false);

    const titleChangeHandeler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandeler = (event) =>{
        setEnteredAmout(event.target.value);
    }

    const dateChangeHandeler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandeler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmout,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmout('');
        setEnteredDate('');
        setvisibleEndHandler();
    }

    const setvisibleHandler = () =>{
        if(!newExpenseVisible){
            setNewExpenseVisible(true);
        }else{
            setNewExpenseVisible(false);
        }
    }
    const setvisibleEndHandler = () => {
        setNewExpenseVisible(false);
    }

    if(!newExpenseVisible){
        return(
        <OpenNewExpense visible={setvisibleHandler}/>
        );
    }

    return (
        <div className='new-expense'>
            <form onSubmit={submitHandeler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Cím</label>
                        <input type="text" value={enteredTitle} required onChange={titleChangeHandeler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Kiadás</label>
                        <input type="number" min="0.01" step="0.01" required value={enteredAmout} onChange={amountChangeHandeler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Dátum</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" required value={enteredDate} onChange={dateChangeHandeler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Hozzáad</button>
                    <button type="button" onClick={setvisibleHandler}>Mégse</button>
                </div>
            </form>
        </div>
    );
}
export default NewExpense;