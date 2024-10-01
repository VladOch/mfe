import React, {lazy, Suspense, useState} from 'react';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onAuthChange = () => {
    setIsSignedIn(true);
  }
  const onSignOut = () => {
    setIsSignedIn(false);
  }
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={onSignOut}/>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onAuthChange={onAuthChange} />
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>
  )
}
