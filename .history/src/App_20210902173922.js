import React from "react";
import Header from "./components/Header/Header";
import AllComponents from "./components/Login/AllComponents";
import RunCards from "./components/Main/RunCards";

function App() {
  return (
    <div className="App">
      <Header />
      <AllComponents />
      <RunCards />
    </div>
  );
}

export default App;
