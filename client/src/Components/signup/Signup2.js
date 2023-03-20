import React, { useState } from "react";
import '../styles/Login.css'
// import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";

export default function Signup() {
    const [value, setValue] = useState('');
    const navigate = useNavigate()
    return (

        <div class="login-page">
            <h1>הרשמה לLetTargel</h1>
            <div class="form">
                <form class="register-form">


                </form>
                {/* <div className="card flex justify-content-center" >
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} placeholder="שם"/>
                </div> */}
                <input type="text" placeholder="שם" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="text" placeholder="כיתה" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="email" placeholder="כתובת אמייל" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="text" placeholder="טלפון" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="text" placeholder="תעודת זהות" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="password" placeholder="סיסמא" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />
                <input type="password" placeholder="אימות סיסמא" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} />

                <button style={{ borderRadius: "7px" }}>create</button>
                <p class="message">?Already registered <div onClick={() => { navigate('/login') }} style={{ cursor: "pointer", color: "green" }}>Sign In</div></p>
            </div>

        </div>
    )
}