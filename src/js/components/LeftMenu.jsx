import React, { Component } from "react";
import { connect } from "react-redux";

import SkillsList from "../containers/SkillsList.jsx";

import { togglePopupAddSkill } from "../actions";
import store from '../store'

import "./LeftMenu.scss";

import AddBtnText from "./AddBtnText";

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftMenu">
        <div className="leftMenu__topBox">
          <div className="leftMenu__logo" />
          <h3 className="leftMenu__title">Навыки</h3>
          <ul className="leftMenu__list">
            <SkillsList />
          </ul>
        </div>
        {console.log("props", this.props)}
        {console.log("store", store)}
        <AddBtnText
          text="Добавить навык"
          icon="plus"
          onClick={() => store.dispatch(this.props.togglePopupAddSkill())}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { togglePopupAddSkill }
)(LeftMenu);
