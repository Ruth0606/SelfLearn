import React, { useEffect, useState, useRef } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import { Password } from 'primereact/password';

import "./ChangePassword.css"

export default function ResetPassword() {
    const [currentPass, setCurrentPass] = useState('');
    const [pass, setPass] = useState('');
    const [wrong,setWrong] = useState(true);
    // const [user, setUser] = useState(null);
    // const [value, setValue] = useState('');
    const toast = useRef(null);
    const { getDataFunc, deleteDataFunc, postDataFunc ,updateDataFunc} = useDataFunctions();

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'אישור', detail: 'הסיסמה הוחלפה', life: 3000 });
    }
    useEffect(() => {
        if(currentPass==JSON.parse(localStorage.getItem('user')).password)
        {
            console.log("imereeeeeee");
            setWrong(false)
        }
        else{
            setWrong(true)

        }
        console.log({currentPass});
         }, [currentPass]);

    return (
        <div className="flex justify-content-center">
            <div className="card mx-8 w-30rem h-50rem">
                <div></div>
                <Card >
                    <h2>שינוי סיסמה</h2>
                    <div className="card flex justify-content-center">
                        <span className="p-float-label" style={{ marginTop: "2rem" }}>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-id-card" />
                                {/* <InputText id="id" value={id} onChange={(e) => setId(e.target.value)} /> */}
                                {/* <div className="card flex justify-content-center"> */}
                                    <Password feedback={false} value={currentPass} onChange={(e) => {   
                                    setCurrentPass(e.target.value)
                                    console.log("changeeeeeeeeeeeeee");
                                    // console.log({currentPass});
                                }
                                    } toggleMask />
                                {/* </div> */}
                                <label htmlFor="currentPass">סיסמה נוכחית</label>
                            </span>
                        </span>
                    </div>
                    {wrong?<span style={{fontSize:"0.85rem"}}><i className="pi pi-times" style={{ color: '#db3a3a',marginTop:"2px"}}></i>סיסמה שגויה</span>:<span style={{fontSize:"0.85rem"}}><i className="pi pi-check-circle" style={{ color: 'green',marginTop:"2px"}}></i>סיסמה נכונה</span>}

                    <div className="card flex justify-content-center">
                        <span className="p-float-label" style={{ marginTop: "2rem" }}>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                {/* <InputText id="mail" value={mail} onChange={(e) => setMail(e.target.value)} /> */}
                                {/* <div className="card flex justify-content-center"> */}
                                    <Password value={pass} onChange={(e) => setPass(e.target.value)} toggleMask />
                                {/* </div> */}
                                <label htmlFor="pass">סיסמה חדשה</label>
                            </span>
                        </span>
                    </div>

                    <Toast ref={toast} />
                    <Button label="שנה סיסמה" icon="pi pi-check-circle" className="p-button-success" onClick={() => {
                        console.log("enterrrrrrrrrrrr");
                        if (currentPass != '' && pass != '') {
                            console.log("222222222222222222222222222");
                            console.log(currentPass);
                            console.log(JSON.parse(localStorage.getItem('user')).password);
                            if(currentPass==JSON.parse(localStorage.getItem('user')).password)
                            {
                                console.log("enterrrrrrrrrrrr3333333333333333333333333333333");

                                const x={grade:JSON.parse(localStorage.getItem('user')).grade,id:JSON.parse(localStorage.getItem('user')).id,idstudent:JSON.parse(localStorage.getItem('user')).idstudent,
                                    ismanager:JSON.parse(localStorage.getItem('user')).ismanager,mail:JSON.parse(localStorage.getItem('user')).mail,name:JSON.parse(localStorage.getItem('user')).name,
                                    password :pass,phone:JSON.parse(localStorage.getItem('user')).phone}
                                    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                                    console.log(x)
                                    showSuccess()
                                    localStorage.setItem("user",JSON.stringify(x))
                                 updateDataFunc(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`, x);
                               
                            }
                            else{
                                alert("סיסמה שגויה")
                            }
                        //     getDataFunc(`user/getUser/${id}`)
                        //         .then(
                        //             (user) => {
                        //                 setUser(user);
                        //                 console.log(user);
                        //                 // user && localStorage.setItem("user", JSON.stringify(user))
                        //                 if (user && user.mail == mail) {
                        //                     console.log("us", user.password)
                        //                     setPass(user.password)
                        //                     console.log({ id });
                        //                     console.log({ mail });
                        //                     console.log({ pass });
                        //                     postDataFunc('user/sendMailforResetPass', { userId: id, userMail: mail, userPass: user.password })
                        //                 }
                        //                 showSuccess()
                        //             }
                        //         );

                        }
                        else {
                            alert("חובה למלא נתונים")
                        }
                  
                    }} style={{ marginTop: "2rem", marginBottom: "2rem", backgroundColor: "#4caffe", borderBlock: "#4caffe", border: "#4caffe", direction: "ltr" }} />

                </Card>
            </div>
        </div>
    )
}