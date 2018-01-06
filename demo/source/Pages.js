import React, { Component } from "react";
import { withState, Link } from "jarl-react";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import NotFound from "./pages/NotFound";

const renderPage = (page, missingPath) => {
    switch (page) {
        case "home":
            return <Home />;
        case "about":
            return <Page2 />;
        default:
            // Handle missing pages
            return <NotFound missingPath={missingPath} />;
    }
};

class Pages extends Component {
    render() {
        // JARL injects the `page` prop from state via withState HOC
        const { page, missingPath } = this.props;

        return (
            <article>
                <nav>
                    <ul>
                        <li>
                            <Link to={{ page: "home" }} data-test="home-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={{ page: "page2" }} data-test="page2-link">
                                Demo 2
                            </Link>
                        </li>
                    </ul>
                </nav>
                {renderPage(page, missingPath)}
            </article>
        );
    }
}

export default withState()(Pages);
