import React from "react";
import ReactDOM from "react-dom";

import MainLayout from "./layout/MainLayout";

import "./index.css";
import Main from "./screens/Main";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from './reducer'
import { Switch, Route }  from 'react-router-dom';
import Login_page from "./component/LogIn_page/Login_page";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Login_page} />
          </Switch>
        </MainLayout>
      </div>
    </Provider>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
/*function startApp() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}*/
/*
if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}*/
