import React from "react";
import {Router, Route, Switch} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from "@material-ui/core/styles"

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export const App = ({history, onAuthChange}) => {

  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onAuthChange={onAuthChange}/>
          </Route>
          <Route path="/auth/signup">
            <SignUp onAuthChange={onAuthChange}/>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}
