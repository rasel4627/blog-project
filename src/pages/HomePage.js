import React, { Component, Fragment, useState } from 'react';
import Navigation from "../components/Navigation/Navigation";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
        return (
            <Fragment>
                <Navigation/>
                <Blog/>
                <Footer/>
            </Fragment>
        );
    }