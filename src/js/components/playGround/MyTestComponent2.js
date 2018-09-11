import React from "react";
import ReactDOM from "react-dom";

class First extends React.Component {
  render() {
    return <p>Привет</p>;
  }
}

class Second extends React.Component {
  render() {
    return <div>Снова компонет</div>;
  }
}

const jsx = (
  <div>
    Пока
    <Second />
    <First />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
