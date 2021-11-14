import React from 'react';
import BlogCart from './BlogCart';
import s from './Blogs.module.css';

const Blogs = (props) => {

    let carts =
        props.carts.map(c => <BlogCart title={c.title}
            description={c.description} />)

    return (
        <div className='blogs' className={s.body}>
            <span className={s.header}>Blogs</span>
            <br />
            <span className={s.description} >WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.</span>
             {carts}
        </div>
    );
}

export default Blogs;