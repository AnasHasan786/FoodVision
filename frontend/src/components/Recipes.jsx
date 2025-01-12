import React, { useEffect, useState } from "react";
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [allLoaded, setAllLoaded] = useState(false);

  const fetchRecipes = async (query = "", append = false) => {
    setLoading(true);
    setError("");
    try {
      const url = query
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        : `https://www.themealdb.com/api/json/v1/1/search.php?s=`; 

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      if (data.meals) {
        const uniqueRecipes = data.meals.filter(
          (recipe) => !recipes.some((r) => r.idMeal === recipe.idMeal)
        );

        setRecipes((prevRecipes) =>
          append ? [...prevRecipes, ...uniqueRecipes.slice(0, 8)] : uniqueRecipes.slice(0, 8)
        );
        if (uniqueRecipes.length < 8) setAllLoaded(true);
      } else {
        setRecipes([]);
        setAllLoaded(true);
      }
    } catch (error) {
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(); 
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setAllLoaded(false);
      setRecipes([]); 
      fetchRecipes(searchTerm);
    } else {
      setAllLoaded(false); 
      fetchRecipes(); 
    }
  };

  const debouncedHandleSearch = debounce(() => {
    if (searchTerm) {
      setAllLoaded(false);
      setRecipes([]); 
      fetchRecipes(searchTerm);
    } else {
      setAllLoaded(false); 
      fetchRecipes(); 
    }
  }, 500);

  const loadMoreRecipes = () => {
    if (!allLoaded) {
      fetchRecipes(searchTerm, true);

      window.scrollTo(0, document.body.scrollHeight); 
    }
  };
  

  const openModal = (recipe) => setSelectedRecipe(recipe);
  const closeModal = () => setSelectedRecipe(null);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="recipe-container">
      <h1>Our Recipes</h1>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            debouncedHandleSearch();
          }}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div className="recipe-item" key={recipe.idMeal}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="recipe-image"
                loading="lazy"
              />
              <h3>{recipe.strMeal}</h3>
              <button
                className="view-recipe-btn"
                onClick={() => openModal(recipe)}
              >
                View Recipe
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="explore-more">
        <button onClick={loadMoreRecipes} disabled={allLoaded}>
          {allLoaded ? "" : "Explore More"}
        </button>
      </div>

      {selectedRecipe && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-video">
                <iframe
                  title="Recipe Video"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${
                    selectedRecipe.strYoutube.split("v=")[1]
                  }`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="modal-text">
                <p><strong>Instructions:</strong></p>
                {selectedRecipe.strInstructions
                  .split(".")
                  .filter((step) => step.trim() !== "")
                  .map((step, index) => (
                    <p key={index}>
                      <strong>Step {index + 1}:</strong> {step.trim()}.
                    </p>
                  ))}
                <button className="close-modal" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
