import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./VideoInTheList.scss";

const VideoInTheList = ({ dataKey, item }) => (
  <Link to={`/video/${dataKey}`}>
    <div className="videoInTheList">
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <div className="videoInTheList__info-box">
        <div className="videoInTheList__title">{item.snippet.title}</div>
        <div className="videoInTheList__description">
          {item.snippet.description}
        </div>
      </div>
    </div>
  </Link>
);

VideoInTheList.propTypes = {
  dataKey: PropTypes.number,
  item: PropTypes.object
};

// item.snippet.thumbnails.medium.url,
// item.snippet.title,

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
