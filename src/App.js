import React from "react";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Companies from "./components/Companies";
import Testimonies from "./components/Testimonies";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Tools/>
      <Companies/>
      <Testimonies/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
