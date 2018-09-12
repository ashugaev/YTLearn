import React, { Component } from "react";

class VideoInTheList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div> Привет {this.props.item} </div>;
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
