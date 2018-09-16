import React, { Component } from "react";
import { connect } from "react-redux";

import "./SkillsList.scss";

class SkillsList extends Component {
  render() {
    return (
      <div>
        {this.props.skills.map((skill, index) => {
          return (
            <li key={skill.name} className="skillsList__item">
              {skill.icon && this.skillIcon(skill.icon)}
              {skill.name}
            </li>
          );
        })}
      </div>
    );
  }

  skillIcon(icon) {
    return (
      <span
        className="skillsList__icon"
        style={{
          background: `no-repeat center/contain url("${icon}")`
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}

export default connect(mapStateToProps)(SkillsList);
