import React from 'react';
import { connect } from 'react-redux';
import Experiences from './Experiences';

const mapStateToProps = (state) => {

  return {
    carts: state.Experiences.carts
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

const ExperiencesContainer = connect(mapStateToProps)(Experiences);

export default ExperiencesContainer;