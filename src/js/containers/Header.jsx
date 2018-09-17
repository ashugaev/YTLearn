import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMenu } from "../actions/index";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="yHeader">
        <div
          onClick={() => this.props.onMenuClick()}
          className="yHeader__menuBtn"
        />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return {
    onMenuClick: () => {
      dispatch(toggleMenu());
    }
  };
};

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       toggleMenu
//     },
//     dispatch
//   );
// }

export default connect(matchDispatchToProps)(Header);
