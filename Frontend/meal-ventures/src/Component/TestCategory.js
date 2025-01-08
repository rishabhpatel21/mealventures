import React, { useState } from "react";
import axios from "axios";
const TestCategory = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [CATEGORY_NAME, setCATEGORY_NAME] = useState("");
    const [displayCount, setDisplayCount] = useState(10);
    const [error, setError] = useState("");
  
    const searchRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/search?query=${query}&CATEGORY_NAME=${CATEGORY_NAME}`
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
          <select
            className="Select-Field"
            value={CATEGORY_NAME}
            onChange={(e) => setCATEGORY_NAME(e.target.value)}
          >
          <option value="">Select CATEGORY_NAME</option>
          <option value="Afghan">Afghan</option>
          <option value="African">African</option>
          <option value="American">American</option>
          <option value="Andhra">Andhra</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Arab">Arab</option>
          <option value="Assamese">Assamese</option>
          <option value="Asian">Asian</option>
          <option value="Awadhi">Awadhi</option>
          <option value="Bihari">Bihari</option>
          <option value="British">British</option>
          <option value="Brunch">Brunch</option>
          <option value="Burmese">Burmese</option>
          <option value="Cantonese">Cantonese</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Chettinad">Chettinad</option>
          <option value="Chinese">Chinese</option>
          <option value="Coastal Karnataka">Coastal Karnataka</option>
          <option value="Coorg">Coorg</option>
          <option value="Continental">Continental</option>
          <option value="Dessert">Dessert</option>
          <option value="Dinner">Dinner</option>
          <option value="European">European</option>
          <option value="French">French</option>
          <option value="Fusion">Fusion</option>
          <option value="Greek">Greek</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal">Himachal</option>
          <option value="Hunan">Hunan</option>
          <option value="Hyderabadi">Hyderabadi</option>
          <option value="Indian">Indian</option>
          <option value="Indo Chinese">Indo Chinese</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Japanese">Japanese</option>
          <option value="Jewish">Jewish</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kashmiri">Kashmiri</option>
          <option value="Konkan">Konkan</option>
          <option value="Korean">Korean</option>
          <option value="Kongunadu">Kongunadu</option>
          <option value="Lunch">Lunch</option>
          <option value="Lucknowi">Lucknowi</option>
          <option value="Malabar">Malabar</option>
          <option value="Malvani">Malvani</option>
          <option value="Malaysian">Malaysian</option>
          <option value="Mangalorean">Mangalorean</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Mughlai">Mughlai</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Nepalese">Nepalese</option>
          <option value="North Karnataka">North Karnataka</option>
          <option value="Pakistani">Pakistani</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Rajasthani">Rajasthani</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Snack">Snack</option>
          <option value="South Karnataka">South Karnataka</option>
          <option value="Sri Lankan">Sri Lankan</option>
          <option value="Thai">Thai</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand-North Kumaon">
            Uttarakhand-North Kumaon
          </option>
          <option value="Udupi">Udupi</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="World Breakfast">World Breakfast</option>
             
          </select>
        </div>
      </div>

      <ul>
        <div className="grid-container">
          {recipes.slice(0, displayCount).map((recipe, index) => (
            <div className="Search-card" key={index}>
              <h2 className="Search-card-recipe-name">{recipe.RECIPE_NAME}</h2>
              <p>Recipe ID: {recipe.CATEGORY_NAME}</p>
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

export default TestCategory
