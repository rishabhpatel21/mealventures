import React from 'react';
import { useLocation } from 'react-router-dom';
import "../CSS/Category.css";
import TestCategory from '../Component/TestCategory';
import Footer from '../Component/Footer';


const Category = () => {
  const location = useLocation(); 

  const { categoryName } = location.state || {}; 

  return (
    <>
      <div className="Category-page">
         <div className="Category-header">
            <h1 className='selected-category'>{categoryName ? categoryName : ''} Recipies</h1>
          
         </div>
      </div>
      <TestCategory />
      <Footer/>
    </>
  );
};

export default Category;