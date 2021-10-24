import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts/Default";

// Route Views
import Dashboard from "./views/Dashboard/Dashboard.js";
import SignIn from "./views/Pages/SignIn.js";
import SignUp from "./views/Pages/SignUp.js";

const routes = [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/blog-overview" />
      },
      {
        path: "/dashboar",
        layout: DefaultLayout,
        component: Dashboard
      },
]

export default routes;