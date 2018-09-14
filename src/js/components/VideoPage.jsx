import React, { Component } from "react";
import "./VideoPage.scss";

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="videoPage">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + this.props.extra[this.props.match.params.id].id.videoId}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default VideoPage;
