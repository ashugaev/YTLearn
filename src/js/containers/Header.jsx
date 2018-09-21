import React from "react";
// Коннектор
import { connect } from "react-redux";
// Экшены. связяны со стейтами через конект
import { toggleMenu } from "../actions/index";
// Группа reducers
import reducers from "../store";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="yHeader">
        <div
          className="yHeader__menuBtn"
          onClick={() => this.props.toggleMenu()}
        />
        {console.log(this.props, this.props.menuActive.menuActive)}
        {/* {this.props.toggleMenu()} */}
        {console.log(this.props.menuActive.menuActive)}
        {/* {this.props.menuActive.menuActive && (
          <button className="yHeder__test" />
        )} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuActive: state.menuState
});

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Header);

// export default Header;
