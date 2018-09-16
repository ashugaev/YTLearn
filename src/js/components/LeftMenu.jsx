import React, { Component } from "react";

import SkillsList from "./SkillsList.jsx";

import "./LeftMenu.scss";

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftMenu">
        <div className="leftMenu__logo" />
        <h3 class="leftMenu__title">Навыки</h3>
        <ul class="leftMenu__list">
          <SkillsList />
        </ul>
      </div>
    );
  }
}

export default LeftMenu;
