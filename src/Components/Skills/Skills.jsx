import React from 'react';
import s from './Skills.module.css';
import Tikoit from '../../assets/images/Tikoit.jpg';
import programmingLanguage from './programmingLanguage';

const Skills = (props) => {

    let programmingLanguages = props.programmingLanguages.map(p => <programmingLanguage imgSrc={p.imgSrc} imgAlt={p.imgAlt} languageName={p.languageName} />)
    return (
        <div className='skills' className={s.body}>
            <img className={s.Tigran_img} src={Tikoit} alt="my_image" />

            <div className={s.skills_right_div}>

                {/* my image */}

                {/*header*/}
                <br />
                <br />
                <span className={s.header}>Ինչ եմ անում ես</span>

                {/* text about me*/}
                <span className={s.about_me}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</span>

                <div className={s.languages}>
                    {programmingLanguages}
                    <br />
                    <span className={s.languages_names}>HTML CSS JavaScript jQuery React Redux Wordpress</span>
                </div>

                {/*my skills */}
                <div className={s.mySkills}>
                    <span>⚡Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iure magnam dolores vel alias odit.</span>
                    <br /><br />
                    <span>⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod?</span>
                    <br /><br />
                    <span>⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi aut aspernatur.</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;