import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items, filterExpense }) => {
  const filter = (selectedYear) => {
    filterExpense(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter filterExpense={filter} />
      {items.map((comp) => {
        return (
          <ExpenseItem
            title={comp.title}
            date={comp.date}
            key={comp.id}
            price={comp.price}
          />
        );
      })}
      {/* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        id={props.items[0].id}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        id={props.items[1].id}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        id={props.items[2].id}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        id={props.items[3].id}
        price={props.items[3].price}
      ></ExpenseItem>  */}
    </Card>
  );
};
export default Expenses;
