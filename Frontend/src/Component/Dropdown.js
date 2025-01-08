import React, { useState } from 'react'
import '../CSS/Dropdown.css'
import { Link } from 'react-router-dom'

const dietdropdownitems = [
  {
    id: 1,
    title: 'Diabetic Friendly',
    path: "/diabeticfriendly"
  },
  {
    id: 2,
    title: 'Vegetarian'
  },
  {
    id: 3,
    title: 'High Protein Vegetarian'
  },
  {
    id: 4,
    title: 'Non Vegeterian'
  },
  {
    id: 5,
    title: 'High Protein Non Vegetarian'
  },
  {
    id: 6,
    title: 'Eggetarian'
  },
  {
    id: 7,
    title: 'Vegan'
  },
  {
    id: 8,
    title: 'No Onion No Garlic (Sattvic)'
  },
  {
    id: 9,
    title: 'Gluten Free'
  },
  {
    id: 10,
    title: 'Sugar Free Diet'
  }
]




const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleItemClick = (event) => {
    event.stopPropagation();
    setDropdown(false);
  };
  
  
  return (
    <>
      <ul className={dropdown ? 'diet-submenu clicked' : 'diet-submenu'} onClick={() => setDropdown(!dropdown)}>
        {dietdropdownitems.map((item) => (
          <li key={item.id}>
            <Link to={item.path} onClick={handleItemClick}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};


export default Dropdown
