import {React} from 'react';
import { useLocation } from 'react-router-dom';
import "../CSS/Diet.css";
import Footer from '../Component/Footer';
import Testtest from '../Component/Testtest';


const Diet = () => {
  const location = useLocation(); 


  const { dietName } = location.state || {}; 

  
  return (
    <div className="Diet-page">
        <div className="Diet-header">
            <h1 className='selected-diet'>{dietName ? dietName : 'Diet'} Recipies</h1>
        </div>
        <Testtest/>
      <Footer/>
    </div>
  );
};

export default Diet;
 