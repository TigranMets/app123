import React from 'react';
import s from './ProjectCart.module.css';

const ProjectCart = (props) => {
    return (
        <div className={s.body}>
           <a href="#"><div className={s.projectCart}>
               <div className={s.project_cart_body}>
               <p className={s.project_name}>{props.header}</p>
               <span className={s.about_project}>{props.description}</span>
               <div className={s.bottom_div}>
                   <li>{props.projectLanguage}</li>
                   <span className={s.kb}>1000KB</span>
               </div>
               </div>
           </div>
           </a>
        </div>
    );
}

export default ProjectCart;