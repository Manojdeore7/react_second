import React, { useState } from "react";
import "./filter.css";
import Card from "../UI/Card";
function Ffilter(props) {
  function changeHander(em) {
    props.check(em.target.value);
  }

  return (
    <Card>
      <select onChange={changeHander} className="filter">
        <option value="">All Data</option>
        <option value="2000">2000</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </Card>
  );
}
export default Ffilter;
