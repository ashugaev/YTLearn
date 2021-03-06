import React from "react";

import "./AddBtnText.scss";

const AddBtnText = props => (
  <div className="addBtnText" onClick={props.onClick}>
    <i className={`icon icon_${props.icon} addBtnText__iconPlus`} />
    {props.text}
  </div>
);
export default AddBtnText;
