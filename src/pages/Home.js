import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Hello Home</h1>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/iamges">Images</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            {/*home__header end*/}

            <div className="home__body">

            </div>
            {/*Home Body end*/}

        </div>
    );
};

export default Home;