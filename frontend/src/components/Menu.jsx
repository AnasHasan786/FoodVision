import React, { useState, useEffect } from "react";
import "./Menu.css";
import Footer from "../components/Footer";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories || []);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      });
  }, []);

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const fetchRandomMeals = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const promises = Array.from({ length: 8 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
          (res) => res.json()
        )
      );
      const results = await Promise.all(promises);
      const randomMeals = results.map((data) => data.meals[0]);
      setMenuItems(randomMeals);
    } catch (error) {
      console.error("Error fetching random meals:", error);
      setError("Failed to load random meals.");
    }
    setIsLoading(false);
  };

  const fetchMenuItems = (category) => {
    setIsLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMenuItems(data.meals.slice(0, 8));
        } else {
          setMenuItems([]);
          setError("No items found in this category.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setError("Failed to load menu items.");
        setIsLoading(false);
      });
  };

  const handleFilter = () => {
    if (selectedCategory) {
      fetchMenuItems(selectedCategory);
    } else {
      setError("Please select a category to filter.");
    }
  };

  const handleRemoveFilter = () => {
    setSelectedCategory("");
    fetchRandomMeals();
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="menu-title">Our Delicious Menu</h2>
        <div className="category-filter">
          <div className="custom-dropdown">
            <button
              className={`dropdown-button ${
                selectedCategory ? "category-selected" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategory || "Filter by Category ⬇"}
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {categories.map((category) => (
                  <div
                    key={category.idCategory}
                    className={`dropdown-item ${
                      selectedCategory === category.strCategory
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => {
                      console.log("Category clicked:", category.strCategory);
                      setSelectedCategory(category.strCategory);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category.strCategory}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={handleFilter} className="filter-button">
            Filter
          </button>
        </div>
        {selectedCategory && (
          <div className="remove-filter-wrapper">
            <button
              onClick={handleRemoveFilter}
              className="remove-filter-button"
            >
              Remove Filter
            </button>
          </div>
        )}
      </div>
      {isLoading && <div className="loading">Loading menu...</div>}
      {error && <div className="error">{error}</div>}
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.idMeal} className="menu-item">
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="menu-item-image"
            />
            <h3 className="menu-item-name">{item.strMeal}</h3>
            <p className="menu-item-description">Delicious {item.strMeal}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
