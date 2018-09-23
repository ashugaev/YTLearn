import React from "react";
import { connect } from "react-redux";

import SkillPageItem from "./SkillPageItem";

const SkillsPage = props => (
  <div>
    {console.log("skillsPage", props.skills)}
    {props.skills.map(skill => (
      <SkillPageItem key={skill.name} skill={skill} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps)(SkillsPage);
