import React from 'react';
import jsConf from '../../assets/images/JsConf.jpg';
import s from './Proficiency.module.css';

const Proficiency = () => {
    return (
        <div className='profilciency' className={s.body}>
            {/*my image*/}

            <div className={s.left_div}>
                {/*header*/}
                <p className={s.header}>Proficiency</p>
                <span>HTML CSS</span>
                <br />
                <progress className="file" value="85" max="100"></progress>
                <span>JavaScript</span>
                <br />
                <progress className="file" value="60" max="100"></progress>
                <span>Jquery</span>
                <br />
                <progress className="file" value="60" max="100"></progress>
                <span>React</span>
                <br />
                <progress className="file" value="30" max="100"></progress>
                <span>Wordpress</span>
                <br />
                <progress className="file" value="30" max="100"></progress>
            </div>
            <img className={s.my_image} src={jsConf} alt="" />
        </div>
    );
}

export default Proficiency;