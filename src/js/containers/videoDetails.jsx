import React, { Component } from "react";
import { connect } from "react-redux";

class videoDetails extends Component {
  render() {
    if (!this.props.video) return <p> Ничего не выбрано </p>;
    return (
      <div>
        <div>Name: {this.props.video.name}</div>
        <div>Link: {this.props.video.link}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.active
  };
}

export default connect(mapStateToProps)(videoDetails);
