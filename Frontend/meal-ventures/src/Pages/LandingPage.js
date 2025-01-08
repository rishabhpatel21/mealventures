import styles from "../CSS/LandingPage.css";
import { FiArrowRight } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";
import Section1 from "../Images/4.png";
import Section3 from "../Images/5.png";

import Faq from "../Component/faq";

import { Link } from "react-router-dom";
import Footer from "../Component/Footer";


const LandingPage = () => {
  return (
    <>
    <div className={styles.landingPage}>
      <div className="Hero-section">
        <div className="text-container">
          <h1>
            Plan Your Meals <br></br>Effortlessly with Us.
          </h1>
          <h6>
            Explore a range of nutritious meal choices<br></br> and seamlessly
            incorporate them into your<br></br> schedule.
          </h6>
        </div>
      </div>

      <div className="Section-1">
        <div className="Section-1-left-section">
          <div className="text-container">
            <h1>Explore Delicious Dishes for Every Occasion.</h1>
            <br></br>
            <h6>
              Browse through our extensive collection of mouthwatering dishes
              and easily add them to your calendar for a hassle-free meal
              planning experience.
            </h6>
            <br></br>
            <Link to="/signup" className="link-button">
              <button className="explore-button">
                Explore <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="Section-1-right-section">
          <img src={Section1} alt="Your Profile" />
        </div>
      </div>
      <div className="Section-2">
        {/* Top Section */}
        <div className="Section-2-top-section">
          <h1>
            Save Time, Eat Healthy, Simplify<br></br>Grocery Shopping
          </h1>
          <h6>
            Our meal planning website helps you save time by providing a
            convenient way to plan<br></br> your meals, eat healthy by offering
            a variety of nutritious dishes, and simplify grocery<br></br>{" "}
            shopping with a generated grocery list based on your selections.
          </h6>
        </div>

        {/* Middle Section */}
        <div className="Section-2-middle-section">
          <div className="Section-2-card">
            <FaClockRotateLeft size={30} />
            <h3>Time-Saving</h3>
            <br></br>
            <p>
              Plan your meals effortlessly and<br></br> save time.
            </p>
          </div>

          <div className="Section-2-card">
            <FaClockRotateLeft size={30} />
            <h3>Eat Healthy</h3>
            <br></br>
            <p>
              Discover nutritious dishes and<br></br> improve your diet.
            </p>
          </div>

          <div className="Section-2-card">
            <FaClockRotateLeft size={30} />
            <h3>
              Simplify Grocery<br></br>Shopping
            </h3>
            <p>
              Get a generated grocery list<br></br> based on your selections.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="Section-2-bottom-section">
          <Link to="/signup" className="link-button">
            <button className="explore-button-2">
              Explore <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="Section-3">
        <div className="Section-3-left-section">
          <img src={Section3} alt="Your Profile" />
        </div>

        <div className="Section-3-right-section">
          <div className="text-container">
            <h1>Save Time and Money with Our Meal Planning Service.</h1>
            <br></br>
            <h6>
              Our meal planning service offers a range of benefits, including
              cost savings, waste reduction, and balanced nutrition. With our
              easy-to-use platform, you can plan your meals for the week, add
              them to your calendar, and generate a grocery list based on your
              selections.
            </h6>
          </div>
        </div>
      </div>
      <div className="Faq">
        <Faq />
      </div>
      <div className="Section-4">
        <div className="center-block">
          <h1>Start Planning Your Meals Now</h1>
          <h3>
            Discover delicious recipes and save time with our meal planning
            features.
          </h3>
          <Link to="/signup" className="link-button">
            <button className="getstarted">
              Let's Get Started <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;
