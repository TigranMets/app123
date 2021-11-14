import React from 'react';
import s from './BottomFooter.module.css';

const BottomFooter = () => {
    return (
        <div className={s.bottom_footer}>
            <div className={s.someDiv}>
                <span className={s.made}>Made with ❤️ by Tigran Kheranyan</span>
                <span className={s.theme}>Theme by <a className={s.myPortfolio} href="#"> TigranKheranyan-portflolio</a></span>
            </div>
        </div>
    );
}

export default BottomFooter;