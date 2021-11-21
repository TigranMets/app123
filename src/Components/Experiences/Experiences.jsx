import React from 'react';
import ExperiencesCart from './ExperiencesCart';
import s from './Experiences.module.css';

const Experiences = (props) => {

    let carts =
        props.carts.map(c => <ExperiencesCart companyName={c.companyName}
            companyImageSrc={c.companyImageSrc}
            job={c.job}
            jobExperience={c.jobExperience}
            impressions={c.impressions} />);

    return (
        <div id='experiences' className={s.body}>
            <span className={s.header_experiences}>Experiences</span>
            <div className={s.cartsBlock}>
            {carts}
            </div>
        </div>
    );
}

export default Experiences;