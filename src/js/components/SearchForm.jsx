import React, { Component } from "react";

import "./SearchForm.scss";

class SearchForm extends Component {
  constructor() {
    super();
    (this.API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"),
      (this.result = 20),
      (this.searchPhrase = ""),
      (this.finalURL = `https://www.googleapis.com/youtube/v3/search?`);
  }

  // Получение данных из API
  fetchSearchResults() {
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const resultyt = responseJson.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Submit поиска
  submitSearch(event) {
    event.preventDefault();

    this.fetchSearchResults();
  }

  render() {
    return (
      <div className="searchForm">
        <form action="">
          <input
            placeholder="Введите поисковый запрос"
            className="searchForm__input"
            onSubmit={this.submitSearch}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
