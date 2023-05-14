import React, { useEffect, useState, useRef } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import "./ResetPassword.css"

export default function ResetPassword() {
    const [id, setId] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState(null);
    const toast = useRef(null);
    const { getDataFunc, deleteDataFunc, postDataFunc } = useDataFunctions();

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'אישור', detail: 'הסיסמה נשלחה למייל', life: 3000 });
    }


    return (
        <div className="flex justify-content-center">
            <div className="card mx-8 w-30rem h-50rem">
                <div></div>
                <Card >
                    <p className="m-0">
                        <h2>שחזור סיסמה</h2>
                        על מנת לשחזר את הסיסמה יש להכניס פרטים מזהים
                    </p>

                    <div className="card flex justify-content-center">
                        <span className="p-float-label" style={{ marginTop: "3rem" }}>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-id-card" />
                                <InputText id="id" value={id} onChange={(e) => setId(e.target.value)} />
                                <label htmlFor="id">תעודת זהות</label>
                            </span>
                        </span>
                    </div>

                    <div className="card flex justify-content-center">
                        <span className="p-float-label" style={{ marginTop: "2rem" }}>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                                <label htmlFor="mail">מייל</label>
                            </span>
                        </span>
                    </div>

                    <Toast ref={toast} />
                    <Button label="שלח סיסמה למייל שלי" icon="pi pi-send" className="p-button-success" onClick={() => {
                        if (id != '' && mail != '') {
                            getDataFunc(`user/getUser/${id}`)
                                .then(
                                    (user) => {
                                        setUser(user);
                                        console.log(user);
                                        // user && localStorage.setItem("user", JSON.stringify(user))
                                        if (user&&user.mail==mail) {
                                            console.log("us",user.password)
                                            setPass(user.password)
                                            console.log({ id });
                                            console.log({ mail });
                                            console.log({ pass });
                                            postDataFunc('user/sendMailforResetPass', { userId: id, userMail: mail, userPass: user.password })
                                        }
                                        showSuccess()
                                    }
                                );
                     
                        }
                        else {
                            alert("חובה למלא נתונים אישיים")
                        }
                    }
                    } style={{ marginTop: "2rem", marginBottom: "2rem", backgroundColor: "#4caffe", borderBlock: "#4caffe", border: "#4caffe", direction: "ltr" }} />

                </Card>
            </div>
        </div>
    )
}