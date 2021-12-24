import React from "react";
import Header from "../components/MainPage/Header";
import Main from "../components/MainPage/Main";
import ResultsFiltros from "../components/ResultsFilters";
import CardSelect from "../components/ShowCarSelected/CarSelected";
import Footer from "../components/MainPage/Footer";

import { Switch, Route, Redirect } from "react-router-dom";

const SecondRouter = () => {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resultsFiltros" component={ResultsFiltros} />
          <Route exact path="/cardSelect/:name" component={CardSelect} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default SecondRouter;
