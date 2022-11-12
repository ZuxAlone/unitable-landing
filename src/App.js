import React from "react";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Companies from "./components/Companies";
import Testimonies from "./components/Testimonies";
import Join from "./components/Join";

function App() {
  return (
    <div className="App">
      <Header/>
      <Tools/>
      <Companies/>
      <Testimonies/>
      <Join/>
    </div>
  );
}

export default App;
