import React,{useState,useRef,useContext} from 'react';
import "./LogIn.css";
import {Link} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import UserCredentials from '../../classes/UserCredentials';
import Cookies from 'js-cookie';

export default function LogIn() {

    const [logInError,setLogInError] = useState({exists: false , message: ""});
    const {auth,setAuth} = useContext(UserContext);
    const username = useRef(null);
    const password = useRef(null);
    const [passwordVisibility,setPasswordVisibility] = useState(false);


    async function loginUser(u,p) {
        const url =  `https://ktm-eshop.herokuapp.com/login?username=${u}&password=${p}`;
        const resp = await fetch(url);
        const data = await resp.json();
        // if(data.sessionId === undefined)
        // {
        //     setLogInError({exists: true , message: "Log in error"});
        // }

        // else 
        // {
            // setAuth(data.sessionId,"true");
        // }
        
      }

    function togglePasswordVisibility()
    {
        let x = password.current;
        setPasswordVisibility(!passwordVisibility);

        if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
    }
    
    function login ()
    {
            let user = username.current.value;
            let pass = password.current.value;

            if(user === "" || user === undefined) 
            {
                setLogInError({exists: true , message: "Provide an username"});
            }
            
            else if(pass === "" || pass === undefined)
            {
                setLogInError({exists: true , message: "Provide a password"});
            }

            else if (logInError.exists)
            {
                setLogInError({exists: false , message: ""});


            }

            loginUser(user,pass);
            setAuth(new UserCredentials(true,"sudsfissifs",""));
            Cookies.set("userCredentials","randomString");
    }
    return (
        <form id="logIn">

                <div id="errorLogIn">
                    <label>{logInError.message}</label>
                </div>

            <div id="userNameLogInInput">
                <label>Enter your user name</label>
                <input ref={username} type="text" name="username"/>
            </div>

            <div id="passwordLogInInput">
                <label>Enter your password</label>
                <input ref={password} type="password" name="password"/>
            </div>

            <div id="togglePasswordVisibility"><input type="checkbox" onClick={() => togglePasswordVisibility()}/><label ><span>{passwordVisibility? "Hide" : "Show"}</span> password</label></div>


            <button id="logInButton"  onClick={(e) => {e.preventDefault(); login()}}>Log in</button>
            <Link to="/register"><div id="registerOption" onClick={() => {}}>Don't have an account?  Register!</div></Link>

        </form>
    )
}
