import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const submitExpenseDataHandler = (enteredData) => {
    const submitedEnteredData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    //   console.log(submitedEnteredData);
    props.onGettingExpenseData(submitedEnteredData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
