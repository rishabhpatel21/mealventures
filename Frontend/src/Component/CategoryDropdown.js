import React, { useState } from 'react'
import '../CSS/Categorydropdown.css'
import { Link } from 'react-router-dom'

const categorydropdownitems = ['Indian', 'South Indian Recipes', 'Andhra', 'Udupi', 'Mexican',
     'Fusion', 'Continental', 'Bengali Recipes', 'Punjabi', 'Chettinad',
     'Tamil Nadu', 'Maharashtrian Recipes', 'Italian Recipes', 'Sindhi',
     'Thai', 'Chinese', 'North Indian Recipes', 'Kerala Recipes',
     'Gujarati Recipes', 'Coorg', 'Rajasthani', 'Asian',
     'Middle Eastern', 'Coastal Karnataka', 'European', 'Karnataka',
     'Lucknowi', 'Kashmiri', 'Hyderabadi', 'Side Dish', 'Goan Recipes',
     'Arab', 'Assamese', 'Bihari', 'Malabar', 'Himachal', 'Awadhi',
     'Cantonese', 'North East India Recipes', 'Sichuan', 'Mughlai',
     'Japanese', 'Mangalorean', 'Vietnamese', 'British',
     'North Karnataka', 'Parsi Recipes', 'Greek', 'Nepalese',
     'Oriya Recipes', 'French', 'Indo Chinese', 'Konkan',
     'Mediterranean', 'Sri Lankan', 'Haryana', 'Uttar Pradesh',
     'Malvani', 'Indonesian', 'African', 'Shandong', 'Korean',
     'American', 'Kongunadu', 'Pakistani', 'Caribbean', 'Appetizer',
     'World Breakfast', 'South Karnataka', 'Malaysian', 'Dessert',
     'Hunan', 'Dinner', 'Uttarakhand-North Kumaon', 'Snack', 'Jewish',
     'Burmese', 'Afghan', 'Brunch', 'Jharkhand', 'Nagaland', 'Lunch'];



const CategoryDropdown = () => {
  const [categorydropdown, setCategoryDropdown] = useState(false);

  const handleItemClick = () => {
    setCategoryDropdown(false);
  };
  
  
  return (
    <>
      <ul className={categorydropdown ? 'category-dropdown clicked' : 'category-dropdown'} onClick={() => setCategoryDropdown(!categorydropdown)}>
        {categorydropdownitems.map((item) => (
          <li key={item.id}>
            <Link className='text' to={item.path} onClick={handleItemClick}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};


export default CategoryDropdown
