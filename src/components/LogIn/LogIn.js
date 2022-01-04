import React from 'react';
import "./LogIn.css";
import {Link} from 'react-router-dom';

const logInError = {exists: false , message: ""};

export default function LogIn() {
    return (
        <form id="logIn">

            {logInError.exists &&  
                <div id="errorLogIn">
                    <label>{logInError.message}</label>
                </div>}

            <div id="userNameLogInInput">
                <label>Enter your user name</label>
                <input type="text" name="username"/>
            </div>

            <div id="passwordLogInInput">
                <label>Enter your password</label>
                <input type="password" name="password"/>
            </div>

            <button id="logInButton"  onClick={(e) => {e.preventDefault();}}>Log in</button>
            <Link to="/register"><div id="registerOption" onClick={() => {}}>Don't have an account?  Register!</div></Link>

        </form>
    )
}
