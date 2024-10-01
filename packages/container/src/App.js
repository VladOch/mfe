import React, {lazy, Suspense, useEffect, useState} from 'react';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import {Redirect, Route, Router, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import {Header} from "./components/Header";

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onAuthChange = () => {
    setIsSignedIn(true);
  }
  const onSignOut = () => {
    setIsSignedIn(false);
  }
  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={onSignOut}/>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onAuthChange={onAuthChange} />
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/" />}
                  <DashboardLazy />
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </Router>
  )
}
