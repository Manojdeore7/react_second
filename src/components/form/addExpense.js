//import React ,{useState} from 'react';
import "./addExpense.css";
import NewExpense from "./newExpense";
export default function addExpense(props) {
  function saveHandler(data) {
    props.onSaveData(data);
  }
  return (
    <div className="new-expense">
      <NewExpense onSaveData={saveHandler}></NewExpense>
    </div>
  );
}
