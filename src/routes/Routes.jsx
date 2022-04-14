import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../pages/client/Home";

const Routes = () => {
  return (
    <Switch>
      {/* -----------------Home--------------------- */}
      <Route path="/" exact component={Home} />
     
    </Switch>
  );
};

export default Routes;
