import React, { useState } from "react";
import '../stylesheets/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {

    const [isChecked, SetIsChecked] = useState(false);

    const handleClick = () => {
        SetIsChecked(!isChecked)
    }

    return (
            <div className="login-form">
                <h1>Log In</h1>
                <p>Organize your tasks has never been so easy.</p>
                <h3>Welcome back! Please enter your credentials to access your Trello account and start organizing your tasks efficiently.</h3>
                
                <form action="submit" className="form">
                    <div className="input"><FaUserAlt className="icon" /><input type="text" placeholder="Username" /></div>
                    <div className="input"><RiLockPasswordFill className="icon" /><input type="Password"placeholder="Password" /></div>
                </form>

                <div onClick={handleClick} className="check-content">
                        <input type="checkbox" name="agreement" checked={isChecked} />
                        <p>I agree with the Terms and Conditions.</p>
                    </div>
                    <button>Start Now</button>
            </div>
    )
}