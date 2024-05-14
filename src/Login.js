import { Button } from "antd";
import {Alert} from "antd";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom"
import axios from 'axios' 

function Login(){
    var email;
    var password;
    var navigate = useNavigate();
    var[error, setError] = useState(null);
    function validateCredentials() {
        // if(email === "test" && password === "test"){
        //    navigate("/");
        // }
        // else{
        //     setError("Invalid credentials");
        // }
 
            axios({
                url:"http://apibyauw.eu-4.evennode.com/api" + "/login",
                method:"post",
                data:{email,password}
                
            }).then((response)=>{console.log("Valid login", response)
            localStorage.token = response.data.token
                    navigate("/");
            },
    
                (error)=>{console.log("no data", error)
                setError("Invalid credentials")
                })

                

    }
    function handleEmail(event)
    {
        email=event.target.value
    }
    function handlePassword(event)
    {
        password=event.target.value
    }

    return (
        <>
        {error && <Alert type="danger" message = {error}/>}
        <div>
            <h1> Login Page </h1>
           
                <input placeholder="Enter your Email" onChange={handleEmail}></input><br></br>
            
                <input type = "password" placeholder="Enter your Password" onChange={handlePassword}></input>  <br></br> <br></br> 
                <Button type="primary" onClick={validateCredentials}>Login</Button><br></br>
          
            <Link to ="/Signup"> New User </Link> <br></br>
            <Link to ="/ForgotPassword"> <label> ForgotPassword </label> </Link>
        </div>
        </>
        
    )
}
export default Login;