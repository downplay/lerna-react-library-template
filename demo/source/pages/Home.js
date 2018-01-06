import React, { Fragment } from "react";
import MyDemoComponent from "my-demo-component";

const Home = () => (
    <Fragment>
        <header>
            <h1 data-test="header">Home</h1>
        </header>
        <p>
            <MyDemoComponent message="This is My Demo Component" />
        </p>
    </Fragment>
);

export default Home;
