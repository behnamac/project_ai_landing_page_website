import React from "react";
import "./App.css";
import { Brand, Navbar, Article, Cta,Feature } from "./components";
import { Blog, Footer, Header, Possibility, WhatGPT5,Features } from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT5 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
