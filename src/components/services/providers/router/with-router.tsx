import React from "react";
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";


export const withRouter = (component: () => React.ReactNode) => () => (
    <HashRouter>
        <Suspense fallback="Loading...">
            {component()}
        </Suspense>
    </HashRouter>
);