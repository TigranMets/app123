import React from 'react';
import s from './Home.module.css';

const SocialIcon = (props) => {
    return (
        <div style={{ display: "inline" }} className={s.body}>
            <a href="#"><img alt={props.iconAlt} src={props.iconSrc} /></a>
        </div>
    );
}

export default SocialIcon;