import React from 'react';
import { connect } from 'react-redux';
import Skills from './Skills';

const mapStateToProps = (state) => {
  return {
    programmingLanguages: state.Skills.programmingLanguages,
  }
}

const SkillsContainer = connect(mapStateToProps)(Skills);

export default SkillsContainer;