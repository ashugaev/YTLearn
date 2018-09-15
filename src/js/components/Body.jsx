import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchForm from "./SearchForm.jsx";
import VideoInTheList from "./VideoInTheList.jsx";
import NextPageBtn from "./NextPageBtn.jsx";
import VideoPage from "./VideoPage.jsx";
import VideosContaiter from "../containers/videosContaner.jsx";
import VideoDetails from "../containers/videoDetails.jsx";

import "./Body.scss";

import { createStore } from "redux";
import allRedusers from "../store";
import { Provider } from "react-redux";

const store = createStore(allRedusers);

class ListOfVideos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.extra.map((item, i) => {
          return <VideoInTheList key={i} dataKey={i} item={item} />;
        })}
      </div>
    );
  }
}

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
        {/* Провайдер для передачи стора в компоненты */}
        <Provider store={store}>
          <div>
            {console.log("Хранилище", store)}
            <VideosContaiter />
            <VideoDetails />
            <SearchForm
              changeVideoArray={this.showVideoPreview}
              finalUrlToParent={this.saveFinalUrl}
            />

            <Switch>
              <Route
                path="/video/:id"
                render={props => (
                  <VideoPage {...props} extra={this.state.videoArray} />
                )}
              />
              <Route
                path="/"
                render={props => (
                  <ListOfVideos {...props} extra={this.state.videoArray} />
                )}
              />
            </Switch>

            <div className="body__nextPageBtn">
              <NextPageBtn
                nextPageClick={this.nextPageClick}
                nextPageToken={this.state.nextPageToken}
              />
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<Body />, document.getElementById("root"));
