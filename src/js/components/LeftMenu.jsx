import React, { Component } from "react";

import SkillsList from "../containers/SkillsList.jsx";

import "./LeftMenu.scss";

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftMenu">
        <div className="leftMenu__logo" />
        <h3 className="leftMenu__title">Навыки</h3>
        <ul className="leftMenu__list">
          <SkillsList />
        </ul>

        <addTextBtn text="Добавить навык" />
      </div>
    );
  }
}

export default LeftMenu;
