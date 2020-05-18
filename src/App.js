import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { ShopPage } from "./pages/shoppage";

import { Switch, Route } from "react-router-dom";

const HatsPag = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPag} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
