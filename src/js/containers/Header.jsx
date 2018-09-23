import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMenu } from "../actions/index";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="yHeader">
        { console.log('header', this.props) }
        <div
          className="yHeader__menuBtn"
          onClick={() => this.props.toggleMenu()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuActive: state.menuState,
  skills: state.skills
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleMenu
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Header);
