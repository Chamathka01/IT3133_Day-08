import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [user,setUser] = useState({ username: "",pwd:"",error: ""})
    const getTextInput =(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }

    const authenticate=()=>{
        if(useReducer.username === "Admin" && user.pwd === "abc@123"){
            setUser({username: "", pwd: "",error:""})
            navigate('/dash');
        }else{
            setUser({'error':"Please check your username and password"})
        }
    }
}