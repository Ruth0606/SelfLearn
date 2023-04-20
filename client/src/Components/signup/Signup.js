import React, {useEffect,useState} from "react";
import '../styles/Login.css'
// import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import '../../Hooks/useDataFunctions'
import {useDataFunctions} from '../../Hooks/useDataFunctions'
export default function Signup() {
    const {postDataFunc}=useDataFunctions();
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const navigate = useNavigate()
    // useEffect(()=>{console.log('pass2',pass2)},[pass2]);
    useEffect(()=>{console.log('name',name)},[name]);
    useEffect(()=>{console.log('grade',grade)},[grade]);
    useEffect(()=>{console.log('pass',pass)},[pass]);
    useEffect(()=>{console.log('pass2',pass2)},[pass2]);

    return (
        <div className="login-page">
            <h1>הרשמה לLetTargel</h1>
            <div className="form">
                {/* <div className="card flex justify-content-center" >
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} placeholder="שם"/>
                </div> */}
                <input type="text" placeholder="שם*" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="כיתה" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setGrade(e.target.value)}}/>
                <input type="email" placeholder="כתובת אמייל" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setMail(e.target.value)}}/>
                <input type="text" placeholder="טלפון" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setPhone(e.target.value)}}/>
                <input type="text" placeholder="תעודת זהות*" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setId(e.target.value)}}/>
                <input type="password" placeholder="סיסמא*" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setPass(e.target.value)}}/>
                <input type="password" placeholder="אימות סיסמא*" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} onBlur={(e)=>{setPass2(e.target.value)}}/>

                <button style={{ borderRadius: "7px" }} onClick={()=>{
                    if(pass!=pass2&& pass!=''&&pass2!='')
                    {
                        alert("אימות סיסמא אינו תקין")
                    }
                    else{
                        if(name!=''&& pass!=''&&pass2!=''&& id!='')
                 
                    postDataFunc(("http://localhost:8000/user"),{"name":name,"grade":grade,"mail":mail,"phone":phone,"id":id,"password":pass})
                    .then((data)=>{
                    console.log(data)
                        })  
               
                    }


}}>create</button>
                {/* <Button label="Submit" type="submit" icon="pi pi-check" style={{ borderRadius: "7px" }}/> */}
                <p className="message">?Already registered <div onClick={() => { navigate('/login') }} style={{ cursor: "pointer", color: "green" }}>Sign In</div></p>
            </div>

        </div>
    )
}

// import React, { useState } from "react";
// import { InputText } from "primereact/inputtext";

// export default function BasicDemo() {
//     const [value, setValue] = useState('');

//     return (
//         <div className="card flex justify-content-center">
//             <InputText value={value} onChange={(e) => setValue(e.target.value)} />
//         </div>
//     )
// }
