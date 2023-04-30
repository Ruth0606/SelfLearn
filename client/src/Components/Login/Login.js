
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
// import Home2 from '../Home/Home2'


export default function Login(props) {
    const {getDataFunc}= useDataFunctions();
    const navigate = useNavigate()
    const [idUser, setIdUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [flag1, setFlag1] = useState(false);

    // useEffect(()=>{
    //     if(passUser!='' && idUser!='' ){
    //         getDataFunc(`http://localhost:8000/user/login/${idUser}/${passUser}`)
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
                        // a=e.target.value;
                    }} 
                    style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" , borderRadius: "0.25rem"}} />
                    <input type="password" placeholder="סיסמא"
                       onBlur={(e) => {
                        setPassUser(e.target.value);
                        // b=e.target.value;
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
                    <button type="submit" onClick={()=>{
                        setFlag1(true);
                        props.setUserId(idUser)
                        props.setPassword(passUser)
                        navigate('/') 
                            // {<Home2/>}
                    }} style={{borderRadius: "0.25rem"}}>login</button>
                    <div className="message">?Not registered <p onClick={() => { navigate('/Register') }} style={{ cursor: "pointer", color: "#6366F1" }}>Create an account</p></div>
            </div>
        </div>

        </div>
    )
}

/*import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function ToggleMaskDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
    )
}*/

///////////////////////////////////

// import React, {useRef, useState } from "react";
// import '../styles/Login.css'
// import { useNavigate } from "react-router-dom";
// import { Password } from 'primereact/password';
// import { useFormik } from 'formik';
// import { InputText } from "primereact/inputtext";
// import { Button } from 'primereact/button';
// import { classNames } from 'primereact/utils';

// import { Toast } from 'primereact/toast';



// export default function Login() {
//     const navigate = useNavigate()
//     const [value, setValue] = useState('');

//     const toast = useRef(null);

//     const show = () => {
//         toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.userId });
//         toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.password });
//     };

//     const formik = useFormik({
//         initialValues: {
//             userId: "",
//             password: ""
//         },
//         validate: (data) => {
//             let errors = {};
//             if (!data.userId) {
//                 errors.userId = 'נדרש תעודת זהות משתמש';
//             }
//             if (!data.password) {
//                 errors.password = 'סיסמא נדרשת';
//             }
//             return errors;
//         },
//         onSubmit: (data) => {
//             data && show(data);
//             formik.resetForm();
//         }
//     });

//     const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

//     const getFormErrorMessage = (name) => {
//         return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
//     };
//     return (
//         <div class="login-page">
//             <div class="form">
//                 <form onSubmit={formik.handleSubmit} class="login-form">
//                     {/* <input type="text" placeholder="תעודת זהות" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem" }} /> */}
//                     <Toast ref={toast} />
//                             <InputText
//                                 id="userId"
//                                 name="userId"
//                                 value={formik.values.userId}
//                                 onChange={(e) => {
//                                     formik.setFieldValue('userId', e.target.value);
//                                 }}
//                                 className={classNames({ 'p-invalid': isFormFieldInvalid('userId') })}
//                                 style={{ width:"100%" }}
//                             />
//                             {getFormErrorMessage('userId')}
//                     {/* <input type="password" placeholder="סיסמא" style={{ borderWidth: 1, borderStyle: "dotted", borderColor: "#dbdada", borderRadius: "0.25rem"}}/> */}
//                     {/* <div className="card flex justify-content-center">
//                         <Password 
//                             value={value} 
//                             onChange={(e) => setValue(e.target.value)} 
                             
//                             feedback={false} 
//                             style={{width:"100%"}}
//                             toggleMask
//                         />
//                     </div> */}
//                     <span className="p-float-label">
//                         <Toast ref={toast} />
//                         <Password
//                             id="password"
//                             name="password"
//                             value={formik.values.password}
//                             onChange={(e) => formik.setFieldValue('password', e.target.value)}
//                             toggleMask
//                             className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
//                             feedback={false}
//                         />
//                         <label htmlFor="input_value">סיסמא</label>
//                     </span>

//                     {getFormErrorMessage('password')}

//                     <button type="submit" label="Submit" >login</button>
//                     <p class="message">?Not registered <p onClick={() => { navigate('/signup') }} style={{ cursor: "pointer", color: "green" }}>Create an account</p></p>
//                 </form>
//             </div>
//         </div>
//     )
// }