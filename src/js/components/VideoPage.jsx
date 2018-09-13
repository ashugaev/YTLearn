import React, { Component } from "react";
import "./VideoPage.scss";

class VideoPage extends Component {
  constructor() {
      super()
  }
  render() {
    return <div className="videoPage">ТЕСТ УСПЕШЕН {match.params.id}</div>;
  }
}

export default VideoPage;
