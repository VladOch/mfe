import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {MarketingApp} from "./components/MarketingApp";
import React from 'react';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export const App = () => {
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header/>
            <MarketingApp />
          </div>
        </StylesProvider>
      </BrowserRouter>
  )
}
