import React from "react";
import "./App.css";
import { Brand, Navbar, Article, Cta } from "./components";
import { Blog, Footer, Header, Possibility, WhatGPT5 } from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT5 />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
