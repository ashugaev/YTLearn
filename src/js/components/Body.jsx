import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SearchForm from "./SearchForm.jsx";
import VideoInTheList from "./VideoInTheList.jsx";
import NextPageBtn from "./NextPageBtn.jsx";
import VideoPage from "./VideoPage.jsx";

import "./Body.scss";

const routes = {};

class Body extends Component {
  constructor() {
    super();
    this.state = {
      videoArray: [],
      nextPageToken: ""
    };
    (this.API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"),
      (this.result = 20),
      (this.searchPhrase = ""),
      (this.finalURL = `https://www.googleapis.com/youtube/v3/search?`);
  }

  showVideoPreview = data => {
    const videoArray = data.items;
    const nextPageToken = data.nextPageToken;

    console.log("Привет", videoArray);
    this.setState({ videoArray, nextPageToken });
  };

  // Клик. Следующая страница
  nextPageClick = data => {
    console.log(data, this.finalURL);
    const url = this.finalURL + data;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        const videoArray = responseJson.items;
        const nextPageToken = responseJson.nextPageToken;

        this.setState({ videoArray, nextPageToken });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Запишет урл
  saveFinalUrl = finalURL => {
    // this.setState({ finalURL });
    this.finalURL = finalURL;
    console.log("Итоговый урл", finalURL);
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/video/:id" component={VideoPage} />
          <Link to="/test">About</Link>
          <SearchForm
            changeVideoArray={this.showVideoPreview}
            finalUrlToParent={this.saveFinalUrl}
          />
          {this.state.videoArray.map((item, i) => {
            return <VideoInTheList key={i} item={item} />;
          })}
          <div className="body__nextPageBtn">
            <NextPageBtn
              nextPageClick={this.nextPageClick}
              nextPageToken={this.state.nextPageToken}
            />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Body />, document.getElementById("root"));
