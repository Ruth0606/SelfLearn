
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { useDataFunctions } from '../../Hooks/useDataFunctions';
import useGetData from '../../Hooks/useGetData';
import { useNavigate } from "react-router-dom";


// import { CountryService } from '../service/CountryService';
// import './FormDemo.css';

export const Login2 = (props) => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);


    const { getDataFunc } = useDataFunctions();

    const [flag11, setFlag11] = useState(false);
    const [idUser, setIdUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [userName, setUserName] = useState('');



    const [formData, setFormData] = useState({});
    const { postDataFunc } = useDataFunctions();
    const navigate = useNavigate()

    // const countryservice = new CountryService();

    // useEffect(() => {
    //     countryservice.getCountries().then(data => setCountries(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(()=>{
if(localStorage.getItem("user"))
{
}
},[userName])

    const validate = (data) => {
        let errors = {};

        return errors;
    };
    const onSubmit = (data, form) => {
        setIdUser(data.id)
        setPassUser(data.password)
        setFormData(data);
        setShowMessage(true);
        console.log('id', data.id)
        console.log('password', data.password)
        setFlag11(true);
        props.setUserId(data.id)
        props.setPassword(data.password)
        // setUserName(localStorage.getItem("user").name)
        navigate('/')
    };



    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            {/* <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul> */}
        </React.Fragment>
    );

    return (<>
        <div className="form-demo">

            <div className="flex justify-content-center">
                <div className="card shadow-4 p-5 w-30rem m-8 rtl">
                    <h5 className="text-center">Login</h5>
                    <Form onSubmit={onSubmit} initialValues={{ id: '', password: '' }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="id" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="id" {...input}  />
                                        <label htmlFor="id" className={classNames({ 'p-error': isFormFieldValid(meta) })}>תעודת זהות</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />


                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask feedback={false} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>סיסמה</label>
                                    </span>
                                </div>
                            )} />


                            <Button type="submit" label="כניסה" className="mt-2" />
                            <div className="message mt-4 text-sm text-400">?Not registered <p onClick={() => { navigate('/Register') }} style={{ cursor: "pointer", color: "#6366F1" }}>Create an account</p></div>
                        </form>
                    )} />
                </div>
            </div>
        </div></>
    );
}
export default Login2;