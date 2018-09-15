import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectVideo } from "../actions";

class videosContaiter extends Component {
  render() {
    return (
      <div>
        {console.log("ddd", this.props.videos)}
        <ol>
          {this.props.videos.map(video => {
            return (
              <li
                onClick={() => this.props.selectVideo(video)}
                key={video.name}
              >
                {video.name}, {video.link}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectVideo: selectVideo
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(videosContaiter);
