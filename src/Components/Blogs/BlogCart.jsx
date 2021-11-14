import React from 'react';
import s from './Blogs.module.css';

const BlogCart = (props) => {
    return (
        <div className={s.cart}>
            <button className={s.strelka}>→</button>
            <div className={s.cart_content}>
                <span className={s.title}>
                    {props.title}
                </span>
                <span className={s.cart_description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default BlogCart;