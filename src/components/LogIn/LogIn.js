import React from 'react';
import "./LogIn.css";


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

            <button id="logInButton" onClick={() => {}}>Log in</button>
            <div id="registerOption" onClick={() => {}}>Don't have an account?  Register!</div>

        </form>
    )
}
