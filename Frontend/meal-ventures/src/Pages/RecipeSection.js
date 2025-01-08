// RecipeSection.js

import React, { useState, useEffect } from "react";
import "../CSS/RecipeSection.css";
import backgroundImage from "../Images/banner.jpg";
import Footer from "../Component/Footer";
import DatePicker from 'react-datepicker';


const RecipeSection = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
    borderRadius: "0px 0px 20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Merienda",
  };

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3001/api/recipes");
        const response = await result.json();
        setRecipe(response);
        
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchData();
  }, [recipe]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const {
    RECIPE_ID,
    RECIPE_NAME,
    CATEGORY_NAME,
    COURSE,
    DIET_NAME,
    SERVINGS,
    PREPARATION_TIME,
    COOKING_TIME,
    INGRIDENTS,
    INSTRUCTIONS,
  } = recipe;
  

  const ingridentsArray = INGRIDENTS.split(",")
    .filter((ingrident) => ingrident.trim() !== "")
    .map((instruction, index, array) => (
      // Render each instruction within a <div> element
      <li key={index}>
        {instruction.trim()}
        {index !== array.length && "."}
      </li>
    ));

  const instructionsArray = INSTRUCTIONS.split(".")
    .filter((instruction) => instruction.trim() !== "")
    .map((instruction, index, array) => (
      // Render each instruction within a <div> element
      <li key={index}>
        {instruction.trim()}
        {index !== array.length && "."}
      </li>
    ));

  return (
    <>
      <div style={divStyle}>
        <div className="banner">
          <h1>{RECIPE_NAME}</h1>
        </div>
      </div>
      <div className="recipe-page">
        <div className="recipedetails">
          <table className="category-table">
            <tbody className="category-table-body">
              <tr className="trow">
                <td>
                  <div className="category">
                    <p className="list-side-space">Category:</p>
                  </div>
                </td>
                <td>
                  <p>{CATEGORY_NAME}</p>
                </td>
                <td>
                  <div className="diet">
                    <p className="list-side-space">Diet:</p>
                  </div>
                </td>
                <td>
                  <p>{DIET_NAME}</p>
                </td>
              </tr>
              <tr className="trow">
                <td>
                  <div className="course">
                    <p className="list-side-space">Course:</p>
                  </div>
                </td>
                <td>
                  <p>{COURSE}</p>
                </td>
                <td>
                  <div className="servings">
                    <p className="list-side-space">Servings:</p>
                  </div>
                </td>
                <td>
                  <p>{SERVINGS}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recipe-section">
          <div className="left-section">
            <div className="time-frame">
              <h3 className="heading-style">Time</h3>
              <div className="table-style">
                <table>
                  <tbody>
                    <tr className="time-dis">
                      <td>
                        <h4>Preparation time </h4>
                      </td>
                      <td>{PREPARATION_TIME}</td>
                    </tr>
                    <tr className="time-dis">
                      <td>
                        <h4>Cook Time </h4>
                      </td>
                      <td>{COOKING_TIME}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ingredients-frame">
              <h3 className="heading-style">Ingredients</h3>
              <ul>{ingridentsArray}</ul>
            </div>
            <div className="calendar-frame">
              <h3 className="heading-style">Add to Calendar</h3>
              <div className="date-picker-and-add">
                <DatePicker className="date-picker" selected={new Date()} onChange={(date) => console.log(date)} />
                <button className="add-button">Add</button>
              </div>
            </div>
          </div>
          <div className="right-section">
            <h3 className="heading-style">Instructions</h3>
            <ul>{instructionsArray}</ul>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
};

export default RecipeSection;
