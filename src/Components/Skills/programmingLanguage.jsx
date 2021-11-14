import React from 'react';
import s from './Skills.module.css';

const programmingLanguage = (props) => {
    debugger;
    return (
        <div className={s.programmingLanguage}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <span>{props.languageName}</span>
        </div>
    );
}

export default programmingLanguage;