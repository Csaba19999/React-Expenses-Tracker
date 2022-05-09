import Expenses from "./components/Expenses";

function App() {

  const expenses = [
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
      date: new Date(2022, 2, 29)
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
      date: new Date(2022, 1, 12)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;