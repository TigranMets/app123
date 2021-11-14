import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = (state) => {
  return {
    carts: state.Projects.carts,
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}
*/

const ProjectsContainer = connect(mapStateToProps)(Projects);

export default ProjectsContainer;