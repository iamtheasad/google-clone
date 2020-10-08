import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
<<<<<<< HEAD
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
=======
>>>>>>> e5d57adaa1e3a5be91d7ca4939d1907f2c5f5849

function Home() {
    return (
        <div className="home">
<<<<<<< HEAD
=======
            <h1>Hello Home</h1>
>>>>>>> e5d57adaa1e3a5be91d7ca4939d1907f2c5f5849
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
<<<<<<< HEAD
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
=======
                    <Link to="/iamges">Images</Link>
                    <Link to="/about">About</Link>
>>>>>>> e5d57adaa1e3a5be91d7ca4939d1907f2c5f5849
                </div>
            </div>
            {/*home__header end*/}

            <div className="home__body">
<<<<<<< HEAD
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="Logo"/>

                <div className="home__inputContainer">

                </div>
=======

>>>>>>> e5d57adaa1e3a5be91d7ca4939d1907f2c5f5849
            </div>
            {/*Home Body end*/}

        </div>
    );
};

export default Home;