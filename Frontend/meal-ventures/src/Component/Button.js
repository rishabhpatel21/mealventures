import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Button.css"

const Button = () => {
    return (
        <div className="register-buttons">
            <Link to="/login">
                <button>Log in</button>
            </Link>
            <Link to="/signup">
                <button>Sign up</button>
            </Link>
        </div>
    );
};

export default Button;
