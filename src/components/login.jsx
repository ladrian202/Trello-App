import React from "react";
import '../stylesheets/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
    return (
            <div className="login-form">
                <h1>Log In</h1>
                <p>Organize your tasks has never been so easy.</p>
                <h3>Welcome back! Please enter your credentials to access your Trello account and start organizing your tasks efficiently.</h3>
                
                <form action="submit" className="form">
                    <div className="input"><FaUserAlt className="icon" /><input type="text" placeholder="Username" /></div>
                    <div className="input"><RiLockPasswordFill className="icon" /><input type="Password"placeholder="Password" /></div>
                </form>

                <div className="check-content">
                        <input type="checkbox" name="agreement" />
                        <p>I agree to the plataform accesing my information.</p>
                    </div>
                    <button>Start Now</button>
            </div>
    )
}