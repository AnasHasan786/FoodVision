import React, { Suspense } from "react";
import "./Home.css";
import homeImage from "../assets/home.jpg";

const AboutSectionForHome = React.lazy(() => import("../components/AboutSectionForHome"));
const SpecialDishes = React.lazy(() => import("../components/SpecialDishes"));
const Reviews = React.lazy(() => import("../components/Reviews"));

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={homeImage}
        alt="Food"
        className="image"
        loading="lazy"
      />
      <h1 className="overlay-heading">Food Vision</h1>
      <h2 className="thought">
        "People who love to eat are always the best people." - Julia Child
      </h2>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <AboutSectionForHome />
      </Suspense>

      <h2 className="specials">Our Finest</h2>
      <Suspense fallback={<div>Loading Special Dishes...</div>}>
        <SpecialDishes />
      </Suspense>

      <h2 className="reviews">Testimonials</h2>
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default Home;
