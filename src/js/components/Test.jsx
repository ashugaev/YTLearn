import React, { Component } from "react";

import LeftMenu from "./LeftMenu";
// connect подписывает компонент на store
import { connect } from "react-redux";

class Test extends Component {
  render() {
    return <div>{this.props.menuActive.menuActive && <LeftMenu />}</div>;
  }
}

const mapStateToProps = state => ({
  menuActive: state.menuState
});

export default connect(mapStateToProps)(Test);
