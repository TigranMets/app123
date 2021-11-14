import React from 'react';
import s from './BigProjectCart.module.css';

const BigProjectCart = (props) => {

    return (
        <div className={s.cart}>
                <img src={props.imgSrc} alt={props.imgAlt} />
                <p className={s.project_title}>{props.name}</p>
                <span className={s.cart_description}>{props.description}</span>
                <br />
                <button className={s.wisit_button}>Visit Website</button>
            </div>
    );
}

export default BigProjectCart;