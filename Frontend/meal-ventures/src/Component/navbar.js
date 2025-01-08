import '../CSS/Navbar.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from './Button';
import logoimage from '../Images/logo-2.png'

const Navbar = () => {


  const navitems = [
    {
      id: '1',
      title: 'Home',
      path: '/home'
    },
    {
      id: '2',
      title: 'Category',
      path: '/category'
    },
    {
      id: '3',
      title: 'Diet',
      path: '/diet'
    },
    {
      id: '4',
      title: 'Calendar',
      path: '/calendar'
    },
    {
      id: '5',
      title: 'Grocery list',
      path: '/grocery-list'
    },
    {
      id: '6',
      title: 'Contact',
      path: '/contact'
    },

  ];

  const [dropdown, setDropdown] = useState(false);
  const [categorydropdown, setCategoryDropdown] = useState(false);


  return (
    <>
      <nav>
        <Link to="/"><img src=  {logoimage} alt="Meal Ventures" /></Link>
        <ul className='nav-items'>
          {navitems.map((item) => {
            if (item.title === "Diet") {
              return (
                <li className='nav-list' key={item.id}>
                  <Link to={item.path}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            }
            else if (item.title === "Category"){
              return (
                <li className='nav-list' key={item.id}>
                  <Link to={item.path}
                    onMouseEnter={() => setCategoryDropdown(true)}
                    onMouseLeave={() => setCategoryDropdown(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            }
            return (
              <li className='nav-list' key={item.id}>
                <Link to={item.path} >{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <Button />

      </nav>

    </>
  )
}

export default Navbar
