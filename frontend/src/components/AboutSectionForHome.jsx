import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSectionForHome.css";

const AboutSectionForHome = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="mission-statement">
          <h2>Making Food Exploration Smarter and Easier</h2>
          <p>
            Welcome to my Food Classification website! This website mission is
            to make food recognition and exploration easy and fun. Using
            cutting-edge computer vision learning, this platform can classify
            various dishes with incredible accuracy. Whether you are a food
            enthusiast or a curious learner, my website is here to help you
            explore and identify foods effortlessly.
          </p>

          <div className="learn-more-btn">
            <button onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>

        <div className="video-demo">
          <h2>How It Works</h2>
          <video controls width="100%">
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionForHome;

