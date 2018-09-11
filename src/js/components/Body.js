import React, { Component } from "react";
import ReactDOM from "react-dom";

import SearchForm from "./SearchForm";

import "./Body.scss";

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&maxResults=${result}&q=${searchPhrase}&part=snippet&type=video`

class Body extends Component {
  constructor() {
    super();
    (this.API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"),
      (this.result = 20),
      (this.searchPhrase = ""),
      (this.finalURL = `https://www.googleapis.com/youtube/v3/search?`);
  }
  render() {
    return (
      <div>
        <SearchForm />
        <button>Батон</button>
      </div>
    );
  }
}

// class Search extends Component {
//  constructor() {
//    super()
//    this.state = {
//      searchPhrase: '',
//      resultyt: []

//    }
//    this.searchInputChange = this.searchInputChange.bind(this)

//   this.clicked = this.clicked.bind(this);
//  }

//   searchInputChange(event) {
//     console.log(event.target.value)
//     this.setState({
//       searchPhrase: event.target.value
//     })
//   }

//   searchVideos = () => {
//     searchPhrase = this.state.searchPhrase
//     console.log(searchPhrase, finalURL)
//     this.clicked();
//   }

//   clicked(){
//     fetch(finalURL)
//         .then((response) => response.json())
//         .then((responseJson) => {
//           console.log(responseJson);
//           const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
//           this.setState({resultyt});
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//   }

//   render() {
//     return (
//       <div>
//          {this.state.searchPhrase}
//          <input onChange={this.searchInputChange}/>
//          <button onClick={this.searchVideos}>Ищи</button>
//          {
//           this.state.resultyt.map((link, i) => {
//             console.log(link);
//             var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
//             return frame;
//           })
//         }
//         {this.frame}
//       </div>
//     )
//   }
// }

// class Youtube extends Component {

//     constructor(props){
//       super(props);

//       this.state = {
//         resultyt: []
//       };
//       this.clicked = this.clicked.bind(this);
//     }

//   clicked(){
//     fetch(finalURL)
//         .then((response) => response.json())
//         .then((responseJson) => {
//           console.log(responseJson);
//           const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
//           this.setState({resultyt});
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//   }

//     render(){
//       // console.log(finalURL);
//       console.log(this.state.resultyt);

//       return(
//         <div>
//           <button onClick={this.clicked}>Get youtube videos</button>
//             {
//               this.state.resultyt.map((link, i) => {
//                 console.log(link);
//                 var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
//                 return frame;
//               })
//             }
//             {this.frame}
//       </div>
//       );
//     }
//   }

ReactDOM.render(<Body />, document.getElementById("root"));
