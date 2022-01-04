import {React,useRef,useState} from 'react';
import {Link} from 'react-router-dom';



export default function LogIn() {

    const [registerError,setRegisterError] = useState({exists: false , message: ""});

    const username = useRef(null);
    const password = useRef(null);
    const repeatPassword = useRef(null);

    function register ()
    {
            let user = username.current.value;
            let pass1 = password.current.value;
            let pass2 = repeatPassword.current.value;

            if(pass1 !== pass2)
            {
                setRegisterError({exists: true , message: "Passwords don't match up"});
            }

            else if (registerError.exists)
            {
                setRegisterError({exists: false , message: ""});
            }
    }
        return (
            <form id="logIn">

            {registerError.exists &&  
                <div id="errorLogIn">
                    <label>{registerError.message}</label>
                </div>}

            <div id="userNameLogInInput">
                <label>Enter your user name</label>
                <input ref={username} type="text" name="username"/>
            </div>

            <div id="passwordLogInInput">
                <label>Enter your password</label>
                <input ref={password} type="password" name="password"/>
            </div>

            <div id="passwordLogInInput">
                <label>Repeat your password</label>
                <input ref={repeatPassword} type="password" name="password"/>
            </div>

            <button id="logInButton" onClick={(e) => {e.preventDefault(); register()}}>Log in</button>
            <Link to="/login"><div id="registerOption">Have an account?  Log In!</div></Link>

        </form>
        )
    }

