import React from 'react';
import { connect } from 'react-redux';
import Blogs from './Blogs';

const mapStateToProps = (state) => {
    return {
        carts: state.Blogs.carts
    }
}

const BlogsContainer = connect(mapStateToProps)(Blogs);

export default BlogsContainer;