import React from 'react';
import s from './Experiences.module.css';

function ExperiencesCart(carts) {
    return (
        <div className={s.experiences_cart}>
            <div className={s.title_div}>

                <span className={s.company_name}>{carts.companyName}</span>
                <br />
                <img className={s.company_img} src={carts.companyImageSrc} alt={carts.companyName} />

            </div>

            <span className={s.job}>{carts.job}</span>

            <span className={s.date}>{carts.jobExperience}</span>

            <br />
            <span className={s.impressions}>{carts.impressions}</span>
        </div>
    );
}

export default ExperiencesCart;