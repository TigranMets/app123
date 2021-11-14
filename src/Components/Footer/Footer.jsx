import React from 'react';
import s from './Footer.module.css';
import SmartHome from '../../assets/images/SmartHome.jpg'


function Footer() {
    return (
        <footer id='footer' className={s.footer}>
            <div class={s.left_div}>
                <span className={s.header}>
                    Reach Out to me!
                </span>
                <span className={s.description}>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</span>
                <span className={s.about_me}>"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "</span>
                <span className={s.place}>Yerevan, Armenia</span>
                <div className={s.socImages}>
                    <a href="https://github.com/TigranMets"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="github" /></a>
                    <a href="https://www.instagram.com/tigrankheranyan/"><img src="https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png" alt="instagram" /></a>
                    <a href="#"><img src="https://web.telegram.org/img/logo_share.png" alt="telegram" /></a>
                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="facebook" /></a>
                    <a href="https://www.youtube.com/channel/UCFsM6noHX41yPflmejXwf6A"><img src="https://www.vectorico.com/wp-content/uploads/2018/02/youtube-icon.png" alt="youtube" /></a>
                </div>
            </div>
            <div className={s.rightBlock}>
                <div className={s.myImage}>
                    <img className={s.my_image} src={SmartHome} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer