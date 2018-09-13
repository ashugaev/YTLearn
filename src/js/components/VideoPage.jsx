import React, { Component } from "react";
import "./VideoPage.scss";

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="videoPage">ТЕСТ УСПЕШЕН {this.props.match.params.id}</div>
    );
  }
}

export default VideoPage;
