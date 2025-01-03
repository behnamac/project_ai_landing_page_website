import React from "react";
import "./App.css";
import { Brand, Navbar, Article, Feature, Cta } from "./components";
import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
