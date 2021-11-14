import React from 'react';
import { connect } from 'react-redux';
import BigProjects from './BigProjects';

const mapStateToProps = (state) => {
    
    return {
        carts: state.BigProjects.carts
    }
}

const BigProjectsContainer = connect(mapStateToProps)(BigProjects);

export default BigProjectsContainer;