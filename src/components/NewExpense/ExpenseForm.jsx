import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  //================Individual UseStates for Each Input================

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const priceChangeHandler = (event) => setEnteredPrice(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  //=====================Single UseState for Each Input=====================

  //   const [enteredInputs, setEnteredInputs] = useState({
  //     enteredTitle: "",
  //     enteredPrice: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) =>
  //     setEnteredInputs({
  //       ...enteredInputs,
  //       enteredTitle: event.target.value,
  //     });
  //   const priceChangeHandler = (event) =>
  //     setEnteredInputs({
  //       ...enteredInputs,
  //       enteredPrice: event.target.value,
  //     });
  //   const dateChangeHandler = (event) =>
  //     setEnteredInputs({
  //       ...enteredInputs,
  //       enteredDate: event.target.value,
  //     });

  //===================================================================

  const formInputHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSubmitExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formInputHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
