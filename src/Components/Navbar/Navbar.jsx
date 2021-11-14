import React from 'react';
import {Link} from 'react-scroll'
import nightModeIcon from '../../assets/images/1x/nightModeIcon.png';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <div className={s.body}>
            {/* logo */}
            <Link className={s.TigranMets} to='/home' spy={true} smooth={true}>TigranMets </Link>
            <div className={s.right_menu}>
                {/*ձախ menu*/}
                <Link to='skills' spy={true} smooth={true} >Skills </Link>
                <Link to='profilciency' spy={true} smooth={true}>Proficiency </Link>
                <Link to='experiences' spy={true} smooth={true}>Work Experiences </Link>
                <Link to='projects' spy={true} smooth={true}>Projects</Link>
                <Link to='achievements' spy={true} smooth={true}>Achievements </Link>
                <Link to='blogs' spy={true} smooth={true}>Blogs </Link>
                <Link to='contact_me' spy={true} smooth={true}>Contact Me </Link>
                {/*night mode icon */}
            </div>
        </div>
    );
}

export default Navbar