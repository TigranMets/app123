import React from 'react';
import s from './BigProjects.module.css';
import BigProjectCart from './BigProjectCart/BigProjectCart';

const BigProjects = (props) => {

    let carts = props.carts;

    let cartElemetns =
        carts.map(c => <BigProjectCart imgSrc={c.imgSrc}
            imgAlt={c.imgAlt}
            name={c.name}
            description={c.description} />)

    return (
        <div className={s.body}>
            <span className={s.bigProjects}>Big Projects</span>
            <span className={s.description}>SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH</span>
            <div className={s.carts}>
                {cartElemetns}
            </div>
        </div>
    );
}

export default BigProjects;