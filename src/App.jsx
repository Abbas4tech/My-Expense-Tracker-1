import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 11,
      title: "Car Parts",
      date: new Date(2019, 8, 13),
      price: 22,
    },
    {
      id: 12,
      title: "Car Parts",
      date: new Date(2020, 8, 3),
      price: 30,
    },
    {
      id: 13,
      title: "Car Parts",
      date: new Date(2020, 4, 27),
      price: 36,
    },
    {
      id: 14,
      title: "Rollers",
      date: new Date(2022, 4, 27),
      price: 37,
    },
  ];
  return <Expenses items={expenses}></Expenses>;
}

export default App;
