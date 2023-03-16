
import React, { useState } from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";




export default function Login() {
    const navigate  = useNavigate()
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="תעודת זהות" />
                    <input type="password" placeholder="סיסמא" />
                    <button>login</button>
                    <p class="message">?Not registered <p onClick={() => { navigate ('/signup')}} style={{cursor:"pointer" ,color:"green"}}>Create an account</p></p>
                </form>
            </div>
        </div>
    )
}
