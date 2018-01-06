import React, { Fragment } from "react";
import MyDemoComponentLib from "my-demo-component-lib";

const Home = () => (
    <Fragment>
        <header>
            <h1 data-test="header">Demo 2</h1>
        </header>
        <p>
            <MyDemoComponentLib />
        </p>
    </Fragment>
);

export default Home;
