import React from "react";
// Коннектор
import { connect } from "react-redux";
// Экшены. связяны со стейтами через конект
import { toggleMenu } from "../actions/index";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="yHeader">
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

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Header);
