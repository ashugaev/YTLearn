import React from "react";
import { connect } from "react-redux";

import { toggleMenu } from "../actions/index";

import getMenuState from "../reducers";

import "./Header.scss";

const Header = () => (
  <div className="yHeader">
    <div onClick={() => toggleMenu()} className="yHeader__menuBtn" />
  </div>
);

const mapStateToProps = state => ({
  menuActive: getMenuState(state)
});

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Header);
