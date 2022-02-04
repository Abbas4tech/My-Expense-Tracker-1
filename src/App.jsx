import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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

function App() {
  const [newExpenseData, setNewExpenseData] = useState(expenses);

  const [filteredExpenses, setfilteredExpenses] = useState([...newExpenseData]);

  const getSubmitedExpenseData = (dataFromNewExpense) => {
    console.log(dataFromNewExpense);

    setNewExpenseData((preData) => [...preData, dataFromNewExpense]);
    if (newExpenseData.length === filteredExpenses.length) {
      setfilteredExpenses((preData) => [...preData, dataFromNewExpense]);
    }
  };
  console.log(newExpenseData);

  const filterExpenseData = (selectedYear) => {
    console.log(selectedYear);

    if (selectedYear === "ALL") {
      setfilteredExpenses(newExpenseData);
    } else {
      setfilteredExpenses(
        newExpenseData.filter(
          (comp) => comp.date.getFullYear().toString() === selectedYear
        )
      );
    }
  };

  return (
    <div>
      <NewExpense onGettingExpenseData={getSubmitedExpenseData}></NewExpense>
      <Expenses
        items={filteredExpenses}
        filterExpense={filterExpenseData}
      ></Expenses>
      ;
    </div>
  );
}

export default App;
