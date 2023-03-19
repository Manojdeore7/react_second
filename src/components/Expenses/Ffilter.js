import React, { useState } from "react";
import "./filter.css";
import card from "../UI/card";
function Ffilter(props) {
  function changeHander(em) {
    props.check(em.target.value);
  }

  return (
    <card>
      <select onChange={changeHander} className="filter">
        <option value="">All Data</option>
        <option value="2000">2000</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </card>
  );
}
export default Ffilter;
