import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import aboutImage0 from "../assets/about_0.jpg"; 
import aboutImage1 from "../assets/about_1.jpg";
import aboutImage2 from "../assets/about_2.jpg";
import aboutImage3 from "../assets/about_3.jpg";
import aboutImage4 from "../assets/about_4.jpg";

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="about-container">
      <div className="about-start">
        <img
          src={aboutImage0}
          alt="About Food101"
          className="about-hero-image"
          loading="lazy"
        />
        <h1>About Food101: Inspiring Culinary Excellence</h1>
        <p>
          Whether you’re a novice home cook or a seasoned chef, our platform
          is designed to inspire, educate, and empower you to create delicious
          dishes that bring joy and satisfaction to your table.
        </p>
      </div>

      <h2>What This Site Offers</h2>
      <div className="about-services">
        <div className="feature-container" onClick={() => navigate("/menu")}>
          <img src={aboutImage1} alt="Extensive Menu" loading="lazy" />
          <p className="about-feature">Extensive Menu</p>
        </div>

        <div className="feature-container" onClick={() => navigate("/recipes")}>
          <img src={aboutImage2} alt="Step-by-Step Guides" loading="lazy" />
          <p className="about-feature">Step-by-Step Guides</p>
        </div>

        <div className="feature-container" onClick={() => navigate("/classify")}>
          <img src={aboutImage3} alt="Food Classifier" loading="lazy" />
          <p className="about-feature">Food Classifier</p>
        </div>

        <div className="feature-container" onClick={() => navigate("/blogs")}>
          <img src={aboutImage4} alt="Blog Insights" loading="lazy" />
          <p className="about-feature">Blog Insights</p>
        </div>
      </div>
    </div>
  );
};

export default About;
