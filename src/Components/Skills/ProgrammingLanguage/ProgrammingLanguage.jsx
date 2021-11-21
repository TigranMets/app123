import React from "react";
import s from './ProgrammingLanguage.module.css';

const programmingLanguage = (props) => {
    return <div className={s.programmingLanguageWrapper}>
        <div className={s.programmingLanguage}>
            <div className={s.programmingLanguageImage}>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <span className={s.languages_names}>{props.languageName}</span>
        </div>
    </div>
}

export default programmingLanguage;