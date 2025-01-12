import React from "react";
import Slider from "react-slick";
import "./Reviews.css";
import client_1 from '../assets/client_1.jpeg';
import client_2 from '../assets/client_2.jpeg';
import client_3 from '../assets/client_3.jpg';
import client_4 from '../assets/client_4.jpg';

const reviewsData = [
  {
    id: 1,
    name: "Patrick Muriungi",
    profilePicture: client_1,
    rating: 4,
    reviewText: "Absolutely amazing food recipes. Will definitely come back!",
  },
  {
    id: 2,
    name: "Joy Marete",
    profilePicture: client_2,
    rating: 5,
    reviewText: "Logic of adding Food Classifier is just awesome!!",
  },
  {
    id: 3,
    name: "ClaireBelle Zawadi",
    profilePicture: client_3,
    rating: 4,
    reviewText: "Best experience while reading blogs here!!",
  },
  {
    id: 4,
    name: "Uhuru Kenyatta",
    profilePicture: client_4,
    rating: 4,
    reviewText: "Clearly one of the best food websites I have ever visit!",
  }
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
  };

  return (
    <div className="reviews-section">
      <Slider {...settings} aria-label="Customer reviews carousel">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.profilePicture} alt={`${review.name}'s profile`} className="review-avatar" />
            <h3 className="review-name">{review.name}</h3>
            <div className="review-rating">
              <span className="stars">{"★".repeat(review.rating)}</span>
            </div>
            <p className="review-text">"{review.reviewText}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
