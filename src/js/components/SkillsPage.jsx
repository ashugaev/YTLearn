import React from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SkillPageItem from "./SkillPageItem";

import './SkillsPage.scss'

const SkillsPage = props => (
  <div>
    {console.log("skillsPage", props.skills)}
    {props.skills.map(skill => (
      <Link className="skillPage__item" key={skill.link} to={`/skills/${skill.link}`}>
        <SkillPageItem  skill={skill} />
      </Link>
    ))}
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps)(SkillsPage);
