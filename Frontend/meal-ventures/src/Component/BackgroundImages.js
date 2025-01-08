import React from 'react';
import backgroundImage from '../Images/img2.jpg'; // Adjust the path based on your project structure

const bc_image = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: ' right bottom ',
    width: '100%',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color for better visibility
  };

  return (
    <div style={divStyle}>
    <div className='text'> 
    <h1>See your planned meal here</h1></div>
     
    </div>
  );
};

export default bc_image;
