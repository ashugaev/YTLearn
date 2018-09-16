import React, { Component } from "react";
import { connect } from "react-redux";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="yHeader">
        <div
          onClick={this.onMenuClick(menuState)}
          className="yHeader__menuBtn"
        />
      </div>
    );
  }
}

const menuState = false;

const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: menuState => {
      dispatch(toggleMenu(menuState));
    }
  };
};

export default connect(mapDispatchToProps)(Header);
