import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Lockscreen = lazy(() => import("./user-pages/Lockscreen"));

const BlankPage = lazy(() => import("./general-pages/BlankPage"));
const PrivateRouter = lazy(() => import("./user-pages/PrivateRouter"));

class AppRoutes extends Component {
  render() {
    const isAuthenticated = localStorage.getItem("token");
    const storedToken = localStorage.getItem("token");
    const storedExpiryTime = localStorage.getItem("expiryTime");
    const currentTime = new Date().getTime();
    const isTokenExpired = storedExpiryTime && currentTime > storedExpiryTime;
    console.log(isTokenExpired)
    if (isTokenExpired) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiryTime');
    }
    // const isAuthenticated = true;
    console.log(isAuthenticated);

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRouter
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />
          <Route path="/user-pages/lockscreen" component={Lockscreen} />
          <Route path="/user-pages" />

          <Route path="/error-pages/error-404" component={Error404} /> 
              
          <Route path="/error-pages/error-500" component={Error500} />

          <Route path="/general-pages/blank-page" component={BlankPage} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
