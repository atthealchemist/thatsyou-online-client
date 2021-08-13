import "./styles.css";

import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { EnterPage, GamePage } from "./pages";

const App = () => {
  const [players] = useState([
    {
      id: 1,
      name: "Lorem",
      active: true,
      score: 400
    },
    {
      id: 2,
      name: "Ipsum",
      active: false,
      score: 700
    }
  ]);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <GamePage players={players} />
        </Route>
        <Route path="/enter">
          <EnterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
