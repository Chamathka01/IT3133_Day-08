import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../login.css';

export default function Login(){
    const navigate = useNavigate();
    const [user,setUser] = useState({ username: "",pwd:"",error: ""})
    
    const getTextInput =(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,
            [name]:value,
        }))
    }

    const authenticate=()=>{
        if(user.username === "Admin" && user.pwd === "abc@123"){
            navigate('/dash');
            setUser({username: "", pwd: "",error:""})
            
        }else{
            setUser({'error':"Please check your username and password"})
        }
    }

    return(
        <div className="login">
            <table>
                <tr>
                    <td>Username:</td>
                    <td> <input type="text" name="username" onChange={getTextInput}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td> <input type="password" name="pwd" onChange={getTextInput}/></td>
                </tr>
                <tr>
                    <td style={{color:'red'}} colSpan={2}>{user.error}</td>
                </tr>
            </table>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}