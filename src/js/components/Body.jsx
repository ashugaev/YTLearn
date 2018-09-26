import React, { Component } from "react";
// import ReactDOM from "react-dom";
import * as firebase from "firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";

import SearchForm from "./SearchForm.jsx";
// import VideoInTheList from "./oneSkillPage/VideoInTheList";
import NextPageBtn from "./NextPageBtn.jsx";
import VideoPage from "./VideoPage.jsx";
import PopupAddSkill from "./PopupAddSkill";
import SkillsPage from "./SkillsPage";

import { skillAdd } from '../actions';
// import VideosContaiter from "../containers/videosContaner.jsx";
// import VideoDetails from "../containers/videoDetails.jsx";
import Header from "./header/Header";
import Test from "./Test";

import { connect } from "react-redux";

import firebaseInit, { getSkills } from "../../firebase";
// import configureStore from "../store/index";

import "./Body.scss";
import "../../scss/main.scss";

import "../../scss/elements/_icons.scss";
import OndeSkillPage from "./oneSkillPage/OndeSkillPage";

// import { createStore } from "redux";
// import allRedusers from "../reducers";

// console.log("супермегатест redux", configureStore);

// const store = configureStore();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXRYlzrWR3c829e_CxDkT_t5ksr1N9TEo",
  authDomain: "ytlearn-215919.firebaseapp.com",
  databaseURL: "https://ytlearn-215919.firebaseio.com",
  projectId: "ytlearn-215919",
  storageBucket: "ytlearn-215919.appspot.com",
  messagingSenderId: "817859127970"
};
firebase.initializeApp(config);

export const storage = firebase.storage();

// class ListOfVideos extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.extra.map((item, i) => {
//           return <VideoInTheList key={i} dataKey={i} item={item} />;
//         })}
//       </div>
//     );
//   }
// }

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

  render() {
    return (
      <Router>
        <div>
          <Test />
          {console.log("супермегатест redux", this.props)}

          <Header />
          <div className="body__content">
            <Switch>
              <Route path="/skills/:skillLink" component={OndeSkillPage} />
              <Route path="/" component={SkillsPage} />
              )} />
            </Switch>
          </div>
          {this.props.popUpActive.menuActive && <PopupAddSkill />}
        </div>
      </Router>
    );
  }

  showVideoPreview = data => {
    const videoArray = data.items;
    const nextPageToken = data.nextPageToken;

    this.setState({ videoArray, nextPageToken });
  };

  // Клик. Следующая страница
  nextPageClick = data => {
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
    this.finalURL = finalURL;
  };

  async componentDidMount() {
    const skillsF = await getSkills();
    console.log('асинхрофазатрон', skillsF);
    const kkk = await firebaseInit();
    console.log('asyncBro2', kkk)
    this.props.skillAdd(kkk);
  }
}

const mapStateToProps = state => ({
  menuActive: state.menuState,
  popUpActive: state.popUpAddSkill
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      skillAdd
    },
    dispatch
  );
}


export default connect(mapStateToProps, matchDispatchToProps)(Body);

{
  /* <VideosContaiter /> */
}
{
  /* <VideoDetails /> */
}
{
  /* <SearchForm
              changeVideoArray={this.showVideoPreview}
              finalUrlToParent={this.saveFinalUrl}
            /> */
}
{
  /* <Route
                path="/video/:id"
                render={props => (
                  <VideoPage {...props} extra={this.state.videoArray} />
                )}
              /> */
}
{
  /* <Route
                path="/"
                render={props => (
                  <ListOfVideos {...props} extra={this.state.videoArray} />
                )}
              /> */
}
{
  /* <div className="body__nextPageBtn">
              <NextPageBtn
                nextPageClick={this.nextPageClick}
                nextPageToken={this.state.nextPageToken}
              />
            </div> */
}
