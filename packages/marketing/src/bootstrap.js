import {App} from "./App";
import React from "react";
import ReactDom from "react-dom";

const mount = (el) => {
  ReactDom.render(
    <App />,
    el
  );
}

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_marketing-dev-root');
  if (element) {
    mount(element);
  }
}

export { mount };

