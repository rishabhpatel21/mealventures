import React, { useState } from "react";
import axios from "axios";


const Testtest = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [DIET_NAME, setDIET_NAME] = useState("");
  const [displayCount, setDisplayCount] = useState(10);

  const [error, setError] = useState("");

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/search?query=${query}&DIET_NAME=${DIET_NAME}`
      );

      setRecipes(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Error fetching recipes");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchRecipes();
    }
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };


  return (
    <div>
      <div className="Search-headers">

        
        <div className="Search1">
          <input
            className="Input-Field"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search Recipes by Name"
          />

          <button className="Search-button" onClick={searchRecipes}>
            Search
          </button>
          {error && <p>{error}</p>}
        </div>
        <div className="Selections">
          <div className="Diet-Selection">
            <select
              className="Select-Field"
              value={DIET_NAME}
              onChange={(e) => setDIET_NAME(e.target.value)}
            >
              <option value="">Select DIET_NAME</option>
              <option value="Diabetic Friendly">Diabetic Friendly</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="High Protein Vegetarian">
                High Protein Vegetarian
              </option>
              <option value="Non Vegeterian">Non Vegetarian</option>
              <option value="High Protein Non Vegetarian">
                High Protein Non Vegetarian
              </option>
              <option value="Eggetarian">Eggetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="No Onion No Garlic (Sattvic)">
                No Onion No Garlic (Sattvic)
              </option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Sugar Free DIET_NAME">Sugar Free DIET_NAME</option>
            </select>
          </div>
        </div>
      </div>

      <ul>
      <div className="grid-container">
  {recipes.slice(0, displayCount).map((recipe, index) => (
    <div className="Search-card" key={index}>
      <h2 className="Search-card-recipe-name">{recipe.RECIPE_NAME}</h2>

      <p>CATEGORY_NAME: {recipe.CATEGORY_NAME}</p>
     
      <p>Diet: {recipe.DIET_NAME}</p>
    </div>
    
  ))}
</div>
      </ul>
      {recipes.length > displayCount && (
        <button className="Show-more-button" onClick={handleShowMore}>
          Show More
        </button> 
      )}

    </div>
  );
}

export default Testtest;
