import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Help from "./components/Help";
import About from "./components/About";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cart" component={Cart} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
