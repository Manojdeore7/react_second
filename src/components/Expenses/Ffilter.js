import React, { useState } from "react";
import "./filter.css";
function Ffilter(props) {
  function changeHander(em) {
    props.check(em.target.value);
  }

  return (
    <div>
      <select onChange={changeHander} className="filter">
        <option value="">filter the data</option>
        <option value="2000">2000</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
export default Ffilter;
