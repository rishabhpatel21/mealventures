import './App.css';
import Navbar from './Component/navbar';
import { Route,Routes } from 'react-router-dom';
import Category from './Pages/Category';
import Diet from './Pages/Diet';
import Calpage from './Pages/Calpage';
import Grocerylist from './Pages/Grocerylist';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Login from './Component/Login';
import Registration from './Component/Registration';
import RecipeSection from './Pages/RecipeSection';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Registration />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/diet" element={<Diet />}/>
        <Route path="/calendar" element={<Calpage />}/>
        <Route path="/grocery-list" element={<Grocerylist />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path={`/recipes/:RECIPE_ID`} component={<RecipeSection />} />
      </Routes>
      
    </>   
  );
}

export default App;
