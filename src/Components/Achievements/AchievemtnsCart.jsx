import React from 'react';
import s from './Achievemtns.module.css';

const AchievemtnsCart = (props) => {

    return (
        <div id='achievements' className={s.cart}>
            <div className={s.achievementImg}>
                <img className={s.achieventn__img} src={props.imgSrc} alt='' />
            </div>
            <span className={s.achievemt_header}>{props.achievementHeader}</span>
            <span className={s.achievemt_description}>{props.achievementDescription}</span>
            <div className={s.buttons}>
                <button>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default AchievemtnsCart;