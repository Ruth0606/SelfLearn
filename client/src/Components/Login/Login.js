
import React, {useEffect,useState} from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import '../../Hooks/useGetData'
import '../../Hooks/useDataFunctions'
import {useDataFunctions} from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'
import { Toast } from 'primereact/toast';
import axios from 'axios';


export default function Login(props) {
    const {getDataFunc}= useDataFunctions();
    const navigate = useNavigate()
    const [idUser, setIdUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [flag1, setFlag1] = useState(false);

    // useEffect(()=>{
    //     if(passUser!='' && idUser!='' ){
    //         getDataFunc(`user/login/${idUser}/${passUser}`)
    //         .then(
    //             (data) => {
    //             console.log("data")
    //             console.log(data);
    //                         }
    //                       );
    //                     }
    // },[flag1])

  
    return (
        <div className="w-700">
        <div className="login-page">
            <div className="form">
               
                    <input type="text" placeholder="תעודת זהות"
                     onBlur={(e) => {
                        setIdUser(e.target.value);
                   
                    }} 
                    style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" , borderRadius: "0.25rem"}} />
                    <input type="password" placeholder="סיסמא"
                       onBlur={(e) => {
                        setPassUser(e.target.value);
               
                    }}  
                    style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem", borderRadius: "0.25rem"}}/>
    
                    <button type="submit" onClick={()=>{
                        setFlag1(true);
                        props.setUserId(idUser)
                        props.setPassword(passUser)
                        navigate('/') 
                       
                    }} style={{borderRadius: "0.25rem"}}>login</button>
                    <div className="message">?Not registered <p onClick={() => { navigate('/Register') }} style={{ cursor: "pointer", color: "#6366F1" }}>Create an account</p></div>
            </div>
        </div>

        </div>
    )
}

