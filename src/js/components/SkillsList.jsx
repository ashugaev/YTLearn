import React, { Component } from "react";

import "./SkillsList.scss";

class SkillsList extends Component {
  render() {
    return (
      <div>
        <li className="skillsList__item">React.js</li>
        <li className="skillsList__item">Vue.js </li>
      </div>
    );
  }
}

export default SkillsList;
