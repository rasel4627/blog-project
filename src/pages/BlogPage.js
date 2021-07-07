import React, { Component, Fragment } from 'react';
import Navigation from "../components/Navigation/Navigation";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation/>
                <Blog/>
                <Footer/>
            </Fragment>
        );
    }
}

export default BlogPage;