import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const LinkComponent = ({ categoryName }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true); 
  };

  
  return (
    <li key={categoryName}>
      <Link
        to="/Category"
        state={{ categoryName }} 
        onClick={handleClick}
        className={`link ${isActive ? 'active' : ''}`}
      >
        {categoryName}
      </Link>
    </li>
  );
};

const CategoryList = () => {
  const categories = ['Afghan', 'African', 'American', 'Andhra', 'Appetizer',
   'Arab', 'Assamese', 'Asian', 'Awadhi', 'Bengali ', 'Bihari', 'British',
   'Brunch', 'Burmese', 'Cantonese', 'Caribbean', 'Chettinad', 'Chinese',
  'Coastal Karnataka', 'Coorg', 'Continental', 'Dessert', 'Dinner',
  'European', 'French', 'Fusion', 'Goan ', 'Greek',
  'Gujarati ', 'Haryana', 'Himachal', 'Hunan', 'Hyderabadi',
  'Indian', 'Indo Chinese', 'Indonesian', 'Italian ', 'Japanese',
  'Jewish', 'Jharkhand', 'Karnataka', 'Kashmiri', 'Kerala ',
  'Konkan', 'Korean', 'Kongunadu', 'Lunch', 'Lucknowi',
  'Maharashtrian ', 'Malabar', 'Malvani', 'Malaysian', 
  'Mangalorean', 'Mediterranean', 'Mexican', 'Middle Eastern',
  'Mughlai', 'Nagaland', 'Nepalese', 'North East India ',
  'North Indian ', 'North Karnataka', 'Oriya ', 
  'Pakistani', 'Parsi ', 'Punjabi', 'Rajasthani', 
  'Sichuan', 'Side Dish', 'Snack', 'South Indian ',
  'South Karnataka', 'Sri Lankan', 'Thai', 'Tamil Nadu',
  'Uttar Pradesh', 'Uttarakhand-North Kumaon', 'Udupi',
  'Vietnamese', 'World Breakfast'];

  // Render the list of links
  return (
    <ul>
      {categories.map((categoryName) => (
        <LinkComponent key={categoryName} categoryName={categoryName} />
      ))}
    </ul>
  );
};

export default CategoryList;
