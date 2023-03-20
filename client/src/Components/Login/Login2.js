
import React, { useState } from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';
import '../../Hooks/useGetData'
import '../../Hooks/useDataFunctions'
import {useDataFunctions} from '../../Hooks/useDataFunctions'

import { Toast } from 'primereact/toast';



export default function Login() {
    const {getDataFunc}= useDataFunctions();
    const navigate = useNavigate()
    const [idUser, setidUser] = useState('');
    const [passUser, setidpassUser] = useState('');

    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="תעודת זהות"
                     onBlur={(e) => {
                        // setidUser(e.target.value);
                        const a=e.target.value;
                    }} 
                    style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" , borderRadius: "0.25rem"}} />
                    <input type="password" placeholder="סיסמא"
                       onBlur={(e) => {
                        // setidpassUser(e.target.value);
                        const b=e.target.value;
                    }}  
                    style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem", borderRadius: "0.25rem"}}/>
                    {/* <div className="card flex justify-content-center"> */}
                        {/* <Password 
                            value={value} 
                            onChange={(e) => setValue(e.target.value)} 

                            feedback={false} 
                            style={{width:"100%"}}
                            toggleMask
                        /> */}
                    {/* </div> */}
                    {/* <span className="p-float-label"> */}
                            {/* <Toast ref={toast} /> */}
                            {/* <Password
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={(e) => formik.setFieldValue('password', e.target.value)}
                                toggleMask
                                className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                                feedback= {false}
                            /> */}

                            {/* <label htmlFor="input_value">סיסמא</label> */}
                        {/* </span> */}
                    <button onClick={()=>{
                        // const {
                        //     data: dataUser,
                        //     error,
                        //     loading,
                        //     refetch,
                        //   } = useGetData(`http://localhost:8000/user/login/${idUser}/${passUser}`);
                        console.log(a)
                        console.log(b)
                        getDataFunc(`http://localhost:8000/user/login/${a}/${b}`).then(
                            (data) => {
                                console.log(data);
                            }
                          );
                    }} style={{borderRadius: "0.25rem"}}>login</button>
                    <p className="message">?Not registered <p onClick={() => { navigate('/signup') }} style={{ cursor: "pointer", color: "green" }}>Create an account</p></p>
                </form>
            </div>
        </div>
    )
}