import React from 'react';
import TigranTumoImg from '../../assets/images/TigranTumo.jpg';
import SocialIcon from './SocialIcon';
import s from './Home.module.css';
import { Link } from 'react-scroll';

const Home = (props) => {
    let socialIconImages =
        props.socImages.map(s => <SocialIcon iconAlt={s.iconAlt} iconSrc={s.iconSrc} />);

    return (
        <div className={s.homeWrapper}>

            <div className={s.left_block}>
                <span className={s.header}>Hi all, I'm TigranMets 👋</span>

                <div className={s.aboutMe}>
                    <span className={s.text_about_me}>Lorem ipsum dolor sit, amet consectetur 🚀 adipisicing elit. Vitae
                        blanditiis eaque reiciendis, corrupti quos fuga, harum consectetur non
                        remsed exercitationem provident doloremque aliquam deserunt!</span>
                </div>

                <div className={s.socImages}>
                    <a href="https://github.com/TigranMets"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="github" /></a>
                        {socialIconImages}
                </div>
                <div className={s.buttons}>
                    <Link to='footer' spy={true} smooth={true} ><button className={s.button}>Կապնվել ինձ հետ</button></Link>
                    <a href="https://staff.am/en/users/resume/create-pdf"><button className={s.button}>Տեսնել իմ Ռեզյումեն</button></a>
                </div>
            </div >
            <div className={s.imageBlock}>
                < img className={s.TigranTumoImg} src={TigranTumoImg} alt="TigranTumoImg" />
            </div>
        </div >
    );
}

export default Home;