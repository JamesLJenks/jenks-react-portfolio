import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom"; // run <yarn add react-router-dom> in terminal

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
