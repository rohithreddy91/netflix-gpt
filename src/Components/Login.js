import { checkValidData } from "../Utils/Validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{

    const [isSetLogin,setIsSetLogin] = useState(true)
    const navigate = useNavigate();

    const [errorMessage,setErrorMessage]= useState(null);


    const email = useRef(null);
    const password = useRef(null);


    const handleLogin = ()=>{
        const errorMessage = checkValidData(email.current.value, password.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);
        // console.log(errorMessage);
        
        setErrorMessage(errorMessage);
        navigate("/browse");
    }


    const handleToggle = ()=>{
        setIsSetLogin(!isSetLogin)
    }

    return(
    <div>
        <Header/>
        <div className="absolute">
        <img alt="logo" 
        src = "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute bg-black p-12 text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold">{isSetLogin?"Sign In":"Sign Up"}</h1>
        { !isSetLogin && (<input type="text" placeholder="Name" className="my-3 p-2 w-full bg-gray-700" />)}
        <input type="email" ref={email} placeholder="Email" className="my-3 p-2 w-full bg-gray-700 "/>
        <input type="password" ref={password} placeholder="Password" className="my-3 p-2 w-full bg-gray-700" />
        <p className="text-red-500">{errorMessage}</p>
        <button type="signIn" className="bg-red-600 py-4 my-4 px-4 rounded w-full" onClick={handleLogin}>{isSetLogin?"Sign In":"Sign Up"}</button>
        <p className="my-4 cursor-pointer" onClick={handleToggle}>{isSetLogin?"New to Netflix?Sign Up now":"Already have an account? Sign In"}</p>
        </form>
    </div>

  );
};
export default Login;