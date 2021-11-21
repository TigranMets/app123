import React from 'react';
import s from './Skills.module.css';
import Tikoit from '../../assets/images/Tikoit.jpg';
import ProgrammingLanguage from './ProgrammingLanguage/ProgrammingLanguage';

const Skills = (props) => {
    let programmingLanguages = props.programmingLanguages.map(p => <ProgrammingLanguage imgSrc={p.imgSrc} imgAlt={p.imgAlt} languageName={p.languageName} />);

    return (
        <div id='skills' className={s.body}>
            <div className={s.skillsImage}>
                <img className={s.Tigran_img} src={Tikoit} alt="my_image" />
            </div>
            <div className={s.whatIDo}>

                <span className={s.header}>Ինչ եմ անում ես</span>

                <span className={s.about_me}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</span>

                <div className={s.languages}>
                    {programmingLanguages}
                </div>

                <div className={s.mySkills}>
                    <span>⚡Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iure magnam dolores vel alias odit.</span>
                    <span>⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod?</span>
                    <span>⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi aut aspernatur.</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;