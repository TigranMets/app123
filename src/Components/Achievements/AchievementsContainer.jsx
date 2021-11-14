import React from 'react';
import { connect } from 'react-redux';
import Achievements from './Achievements';

const mapStateToProps = (state) => {
    return {
        carts: state.Achievemtns.carts
    }
}

const AchievementsContainer = connect(mapStateToProps)(Achievements);

export default AchievementsContainer;