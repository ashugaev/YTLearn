import React, { Component } from "react";

import "./SearchForm.scss";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      resultHtml: []
    };
    this.API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA";
    this.result = 20;
    this.baseURL = `https://www.googleapis.com/youtube/v3/search?`;

    // this.generateUrl = this.generateUrl.bind(this);
  }

  // https://www.googleapis.com/youtube/v3/search?key=${API}&maxResults=${result}&q=${searchPhrase}&part=snippet&type=video

  // Получение данных из API
  fetchSearchResults = url => {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.generateVideoObj(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Генерирует объект с параметрами для вывода
  generateVideoObj = data => {
    console.log(data);
    const resultHtml = data.items.map(
      obj => "https://www.youtube.com/embed/" + obj.id.videoId
    );
    this.setState({ resultHtml });
  };

  // Формирует url для поиска
  generateUrl(searchPhrase) {
    let url = `${this.baseURL}key=${this.API}&maxResults=${
      this.result
    }&q=${searchPhrase}&part=snippet&type=video`;

    return url;
  }

  // Submit поиска
  submitSearch = event => {
    event.preventDefault();
    const value = event.target.elements.searchInput.value;
    const url = this.generateUrl(value);
    this.fetchSearchResults(url);
  };

  render() {
    return (
      <div className="searchForm">
        <form action="" onSubmit={this.submitSearch}>
          <input
            placeholder="Введите поисковый запрос"
            className="searchForm__input"
            name="searchInput"
          />
        </form>

        {this.state.resultHtml.map((link, i) => {
          var frame = (
            <div key={i} className="youtube">
              <iframe
                width="560"
                height="315"
                src={link}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}
      </div>
    );
  }
}

export default SearchForm;
