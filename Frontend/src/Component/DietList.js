import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const LinkComponent = ({ dietName }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true); 
  };

  
  return (
    <li key={dietName}>
      <Link
        to="/Diet"
        state={{ dietName }} 
        onClick={handleClick}
        className={`link ${isActive ? 'active' : ''}`}
      >
        {dietName}
      </Link>
    </li>
  );
};

const DietList = () => {
  const diet = ['Diabetic Friendly', 'Vegetarian', 'High Protein Vegetarian',
  'Non Vegeterian', 'High Protein Non Vegetarian', 'Eggetarian',
  'Vegan', 'No Onion No Garlic (Sattvic)', 'Gluten Free',
  'Sugar Free Diet'];
  // Render the list of links
  return (
    <ul>
      {diet.map((dietName) => (
        <LinkComponent key={dietName} dietName={dietName} />
      ))}
    </ul>
  );
};

export default DietList;
