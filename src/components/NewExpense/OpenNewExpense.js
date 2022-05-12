import "./OpenNewExpense.css";
import "./NewExpense.css";

function OpenNewExpense(props) {

    const setvisibleHandler = () => {
        props.visible(true);
    }
  return (
    <div className="new-expense">
      <button className="new-expense_open_button" onClick={setvisibleHandler}>Kiadás felvétele</button>
    </div>
  );
}

export default OpenNewExpense;
