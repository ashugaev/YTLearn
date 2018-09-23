import React, { Component } from "react";

import LeftMenu from "./LeftMenu";
// connect подписывает компонент на store
import { connect } from "react-redux";

class Test extends Component {
  render() {
    return (
      <div>
        {console.log("texst comp", this.props.menuActive)}
        {this.props.menuActive && <LeftMenu />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // menuActive: state.menuState
  menuActive: true
});

export default connect(mapStateToProps)(Test);
