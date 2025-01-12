import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialDishes.css";

function SpecialDishes() {
  const navigate = useNavigate();

  const dishes = [
    { id: 1, name: "Pizza", image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 2, name: "Burger", image: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 3, name: "Sushi", image: "https://img.freepik.com/free-photo/close-up-plate-with-sushi_23-2148631177.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 4, name: "Pasta", image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 5, name: "Salad", image: "https://img.freepik.com/free-photo/close-up-view-delicious-vegan-salad-with-fresh-ingredients-plate_179666-47139.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 6, name: "Steak", image: "https://img.freepik.com/free-photo/fresh-fried-steak-top-view_140725-5660.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 7, name: "Tacos", image: "https://img.freepik.com/free-photo/mexican-tacos-with-meat-vegetables-red-onion_2829-8665.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
    { id: 8, name: "Ice Cream", image: "https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid" },
  ];

  return (
    <div className="special-dishes-container">
      {dishes.map((dish) => (
        <div key={dish.id} className="dish-card">
          <img
            src={dish.image}
            alt={`Dish: ${dish.name}`}
            className="dish-image"
          />
          <h3 className="dish-title">{dish.name}</h3>
        </div>
      ))}
      <button
        onClick={() => navigate("/menu")}
        className="explore-more-button"
      >
        Explore More
      </button>
    </div>
  );
}

export default SpecialDishes;
