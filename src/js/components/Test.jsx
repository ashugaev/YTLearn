import React, { Component } from "react";

import LeftMenu from "./leftSlideMenu/LeftMenu";
// connect подписывает компонент на store
import { connect } from "react-redux";

class Test extends Component {
  render() {
    return (
      <div>
        {console.log("texst comp", this.props)}
        {this.props.menuActive.menuActive && <LeftMenu />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuActive: state.menuState
  // menuActive: state.menuActive
});

export default connect(mapStateToProps)(Test);
