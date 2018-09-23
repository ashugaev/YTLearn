import React from "react";
import "./SkillPageItem.scss";

const SkillPageItem = props => (
  <div className="skillPageItem">
    <img src={props.skill.icon} alt="" className="skillPageItem__img" />
    <div className="skillPageItem__textBox">
      <div className="skillPageItem__title">{props.skill.name}</div>
      <div className="skillPageItem__description">
        {props.skill.description}
      </div>
    </div>
  </div>
);

export default SkillPageItem;
