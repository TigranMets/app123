import React from 'react';
import jsConf from '../../assets/images/JsConf.jpg';
import s from './Proficiency.module.css';

const Proficiency = () => {
    return (
        <div id='profilciency' className={s.proficiencyWrapper}>

            <div className={s.proficiency}>
                <p className={s.header}>Proficiency</p>
                <div>
                    <span>HTML CSS</span>
                    <progress value="100" max="100"></progress>
                </div>
                <div>
                    <span>JavaScript</span>
                    <progress value="70" max="100"></progress>
                </div>
                <div>
                    <span>Jquery</span>
                    <progress value="30" max="100"></progress>
                </div>
                <div>
                    <span>React</span>
                    <progress value="30" max="100"></progress>
                </div>
                <div>
                    <span>Wordpress</span>
                    <progress value="30" max="100"></progress>
                </div>
            </div>
            <img className={s.my_image} src={jsConf} alt="" />
        </div>
    );
}

export default Proficiency;