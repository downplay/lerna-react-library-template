import React from "react";

import createHistory from "history/createBrowserHistory";
import { SimpleProvider } from "jarl-react";
import routes from "./routes";
import Pages from "./Pages";

const history = createHistory();

const Root = () => (
    <SimpleProvider history={history} routes={routes}>
        <Pages />
    </SimpleProvider>
);

export default Root;
