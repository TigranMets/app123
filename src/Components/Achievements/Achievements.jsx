import React from 'react';
import s from './Achievemtns.module.css';
import AchievemtnsCart from './AchievemtnsCart';

const Achievements = (props) => {

    let carts =
        props.carts.map(c => <AchievemtnsCart imgSrc={c.imgSrc}
            achievementHeader={c.achievementHeader}
            achievementDescription={c.achievementDescription}
            buttonText={c.buttonText} />)

    return (
        <div className='achievements' className={s.body}>
            <span className={s.header}>Achieventns And Certifications 🏆</span>
            <span className={s.description}>ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !</span>
            <div className={s.carts}>
                {carts}
            </div>
        </div>
    );
}

export default Achievements;