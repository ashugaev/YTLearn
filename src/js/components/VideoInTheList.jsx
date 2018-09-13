import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./VideoInTheList.scss";
class VideoInTheList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Link to={`/video/${this.props.item.id.videoId}`}>
          <div className="videoInTheList">
            {}
            <img src={this.props.item.snippet.thumbnails.medium.url} alt="" />
            <div className="videoInTheList__info-box">
              <div className="videoInTheList__title">
                {this.props.item.snippet.title}
              </div>
              <div className="videoInTheList__description">
                {this.props.item.snippet.description}
              </div>
            </div>
          </div>
        </Link>
      </Router>
    );
  }
}

export default VideoInTheList;

// var frame = (
//   <div key={i} className="youtube">
//     <iframe
//       width="560"
//       height="315"
//       src={link}
//       frameBorder="0"
//       allowFullScreen
//     />
//   </div>
// );
// return frame;
