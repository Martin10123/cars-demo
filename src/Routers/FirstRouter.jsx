import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/FormLogginIn/Ingresar";
import Register from "../components/FormLogginIn/Register";
import Contact from "../components/FormLogginIn/Contact";
import SecondRouter from "./SecondRouter";

const FirstRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="" component={SecondRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default FirstRouter;
