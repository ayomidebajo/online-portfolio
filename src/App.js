import React from "react";
import Home from "./Components/home";
import "./styles/style.css";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
