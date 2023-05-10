
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

export const Register = (props) => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);


    const {getDataFunc}= useDataFunctions();

    const [flag1, setFlag1] = useState(false);
    const [idUser, setIdUser] = useState('');
    const [passUser, setPassUser] = useState('');



    const [formData, setFormData] = useState({});
    const { postDataFunc } = useDataFunctions();
    const navigate = useNavigate()

    // const countryservice = new CountryService();

    // useEffect(() => {
    //     countryservice.getCountries().then(data => setCountries(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const validate = (data) => {
        let errors = {};

        if (!data.name) {
            errors.name = 'שם חובה';
        }

        if (!data.email) {
            errors.email = 'כתובת מייל חובה';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }
        if (!data.grade) {
            errors.grade = 'כיתה חובה';
        }
        if (!data.password) {
            errors.password = 'סיסמה חובה';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'כתובת המייל אינה חוקית כתובת חוקית לדוגמא: example@gmail.com';
        }
        if (!data.pass_valid) {
            errors.pass_valid = 'אימות סיסמה חובה';
        }
        else if (data.pass_valid != data.password) {
            errors.pass_valid = 'הסיסמה אינה זהה';
            console.log(data.pass_valid, ":)", data.password);
        }

        if (!data.accept) {
            errors.accept = 'You need to agree to the terms and conditions.';
        }

        return errors;
    };

    // const onSubmit = (data, form) => {
    //     debugger
    //     setFormData(data);
    //     setShowMessage(true);

    //     form.restart();
    // };
    const addUser = (x) => {
        console.log("😍", x)
        postDataFunc(("user"), x)

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("😒", error);
            })
            .finally(function () {
                console.log("😒");
            });
    }

    const onSubmit = (data, form) => {
        setIdUser(data.id)
        setPassUser(data.password)
        setFormData(data);
        setShowMessage(true);
        const x = {
            "name": data.name,
            "grade": data.grade,
            // "email_confirm": data.email_config ? 1 : 0,
            "mail": data.email,
            "phone": data.phone,
            "id": data.id,
            "password": data.password,
            "ismanager":0
        }
        console.log(x);
        addUser(x)
        form.restart();
    };



    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text"  onClick={() => setShowMessage(false)} /></div>;
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

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onClick={()=>{  props.setUserId(idUser);
                        props.setPassword(passUser);setFlag1(true); navigate('/')}} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>הרשמתך לאתר בוצעה בהצלחה!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                    {/* כעת הינך נעשה שותף בפיענוח כתב יד קדשו של המהריל על ידי העלאת הצעות לתיקון התמלול <br></br>
//                         וכן תוכל להעלות פירושים ותגובות לאתר
//                     </p> */}
                </div>
             
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card shadow-4 p-5 w-30rem m-8 rtl">
                    <h3 className="text-center">רישום</h3>
                    <Form onSubmit={onSubmit} initialValues={{name: '', grade: '',email: '',phone: '',id: '', password: '',pass_valid: '', accept: false }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="name" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>שם*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="grade" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="grade" {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="grade" className={classNames({ 'p-error': isFormFieldValid(meta) })}>כיתה*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>מייל*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="phone" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="phone" {...input}  />
                                        <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}>טלפון</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
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
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>סיסמה*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="pass_valid" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="pass_valid" {...input} toggleMask feedback={false} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="pass_valid" className={classNames({ 'p-error': isFormFieldValid(meta) })}>אימות סיסמה*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />


                            <Field name="accept" type="checkbox" render={({ input, meta }) => (
                                <div className="field-checkbox">
                                    <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>  אישור קבלת הודעות מהאתר*   </label>
                                </div>
                            )} />

                            <Button type="submit" label="Submit" className="mt-2"  style={{backgroundColor:"#4caffe" ,borderBlock:"#4caffe",border:"#4caffe"}} />
                            <p className="message mt-4 text-sm text-400">?Already registered <div onClick={() => { navigate('/login') }} style={{ cursor: "pointer", color: "#4caffe" }}>Sign In</div></p>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}
export default Register;