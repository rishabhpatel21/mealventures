import React from "react";
import "../CSS/RecipeSection.css";

const Ingredients = ({ ingredients }) => {
  const divStyle = {
    fontFamily: "Poppins",
  };

  if (!ingredients || ingredients.trim() === "") {
    return null; // or display a message indicating no ingredients provided
  }

  const ingredientList = ingredients.split(",");

  return (
    <>
      <div className="ingredients-frame">
        <div className="subdivision-line">
          <div className="subdivision">
            <h3 className="heading-style">Ingredients</h3>
            <div className="ingredientsdata" style={divStyle}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {ingredientList.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient
                      .trim()
                      .split("\n")
                      .map((item, index) => (
                        <React.Fragment key={index}>
                          {item}
                          <br />
                        </React.Fragment>
                      ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
