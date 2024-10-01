import {App} from "./App";
import React from "react";
import ReactDom from "react-dom";
import {createMemoryHistory, createBrowserHistory } from "history";
const mount = (el, { onNavigate, defaultHistory, initialPath, onAuthChange, }) => {
  const history = defaultHistory ?? createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(
    <App history={history} onAuthChange={onAuthChange} />,
    el
  );
  return {
    onParentNavigate: ({pathname: nextPathName}) => {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_auth-dev-root');
  if (element) {
    mount(element, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };

