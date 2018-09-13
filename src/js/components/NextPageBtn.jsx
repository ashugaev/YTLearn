import React, { Component } from "react";

import "./NextPageBtn.scss";

class NextPageBtn extends Component {
  nextPageClick = () => {
    const nextPageParam = `?pageToken=${this.props.nextPageToken}`;
    this.props.nextPageClick(nextPageParam);
  };
  render() {
    return (
      <a className="nextPageBtn" onClick={this.nextPageClick}>
        Следующая страница{" "}
      </a>
    );
  }
}

export default NextPageBtn;
