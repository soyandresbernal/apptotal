import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import React from "react";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
    </>
  );
}
export default App;
