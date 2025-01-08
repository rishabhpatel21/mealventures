import React from 'react'
import Calender from '../Component/Calender'
import BackgroundImages from '../Component/BackgroundImages'
import '../CSS/Cal.css';
import Footer from '../Component/Footer';

const Calpage = () => {
  return (
     
     <div className="Calpage">
     <BackgroundImages/>
     <div className='cal'>
     <Calender/>
     <div className='Footer'>
     <Footer />
     </div>
    
     </div> 
     </div>
    
  )
}

export default Calpage
