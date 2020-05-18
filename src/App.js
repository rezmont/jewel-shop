import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { ShopPage } from "./pages/shoppage";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header";

const HatsPag = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/hats" component={HatsPag} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
