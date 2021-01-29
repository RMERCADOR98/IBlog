import React from "react";
//Styles
import GlobalStyle from "./GlobalStyle";
//Components
import Nav from "./Components/Nav";
import SignIn from "./Pages/SignIn";
import SignIn2 from "./Pages/SignIn2";
import SignUp from "./Pages/SignUp";
import SignUp2 from "./Pages/SignUp2";
import Home from "./Pages/Home";
//Routing
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}

      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/signIn">
          <SignIn />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route> */}
        <Route exact path="/signIn2">
          <SignIn2 />
        </Route>
        <Route exact path="/signUp2">
          <SignUp2 />
        </Route>
        <Route path={["/:id", "/"]}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
