import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Pricing from "../PricingPage/Pricing";

  const RouterLinks =() =>{
      return(
        <Router>
        <switch>
          <Route component={Pricing} path="/pricing" />
          <Route component={LandingPage} exact={true} path="/" />
        </switch>
        </Router>
      )
  }

  export default RouterLinks;