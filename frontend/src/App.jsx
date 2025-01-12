import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Classifier from "./components/Classifier";
import Recipes from "./components/Recipes";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/classify" element={<Classifier />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
