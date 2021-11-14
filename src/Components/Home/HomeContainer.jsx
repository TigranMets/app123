import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    socImages: state.Home.socImages,
  }
}

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;