import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store.js";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
