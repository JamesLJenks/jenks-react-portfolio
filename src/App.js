import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; // run <yarn add react-router-dom> in terminal

import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
