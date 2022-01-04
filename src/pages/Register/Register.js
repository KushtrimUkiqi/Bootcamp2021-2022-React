import {React,useRef,useState} from 'react';
import {Link} from 'react-router-dom';



export default function LogIn() {

    const [registerError,setRegisterError] = useState({exists: false , message: ""});
    const[loggingIn,setLoggingIn] = useState(false);
    const [passwordVisibility,setPasswordVisibility] = useState(false);
    const username = useRef(null);
    const password = useRef(null);
    const repeatPassword = useRef(null);
    

    function togglePasswordVisibility()
    {
        let x = password.current;
        let y = repeatPassword.current;
        setPasswordVisibility(!passwordVisibility);

        if (x.type === "password") {
            x.type = "text";
            y.type = "text";

          } else {
            x.type = "password";
            y.type = "password";
          }
    }
    function register ()
    {
            
            let user = username.current.value;
            let pass1 = password.current.value;
            let pass2 = repeatPassword.current.value;

            if(pass1 !== pass2)
            {
                setRegisterError({exists: true , message: "Passwords don't match up"});
                repeatPassword.current.value = "";
                password.current.value = "";
            }

            else if (registerError.exists)
            {
                setRegisterError({exists: false , message: ""});
            }
            setLoggingIn(true);
            
            setLoggingIn(false);
    }
        return (
            <form id="logIn">

          
                <div id="errorLogIn">
                    <label>{registerError.message}</label>
                </div>

            <div id="userNameLogInInput">
                <label>Enter your user name</label>
                <input ref={username} type="text" name="username"/>
            </div>

            <div id="passwordLogInInput">
                <label>Enter your password</label>
                <input onFocus={() => setRegisterError({exists: false , message: ""})} ref={password} type="password" name="password"/>
            </div>

            <div id="passwordLogInInput">
                <label>Repeat your password</label>
                <input ref={repeatPassword} type="password" name="password"/>
            </div>

            <div id="togglePasswordVisibility"><input type="checkbox" onClick={() => togglePasswordVisibility()}/><label >{passwordVisibility? "Hide" : "Show"} password</label></div>

            

            <button id="logInButton" onClick={(e) => {e.preventDefault(); register()}}>Register</button>
            <Link to="/login"><div id="registerOption">Have an account?  Log In!</div></Link>

        </form>
        )
    }

