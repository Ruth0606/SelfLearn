import React, { useRef, useState, useContext } from "react";
import BasicEditor from '../editor/BasicEditor.js'
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import { useNavigate } from "react-router-dom"
import { Button } from 'primereact/button';

export default function ContactNotRegister() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        

            if (name && mail && phone) {
                setLoading(true);
                postDataFunc('user/sendMailforNotRegist', { userName: name, userMail: mail, userPhone: phone, content: text })
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
            else {
                alert("חובה למלא נתונים אישיים")
            }



   
    };
    const toast = useRef(null);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const { getDataFunc, deleteDataFunc, postDataFunc } = useDataFunctions();
    // const navigate = useNavigate();
    const textContact = (str) => {
        setText(str)
    }


    // postDataFunc(("question/test"), {idstudent,mark,idquestion_type,idlevel,idsubject})
    return (<>

        <div className="surface-100 border-yellow-500 border-top-2 h-32rem border-bottom-2 pr-8 pl-8">
            <h1 className="text-2xl font-medium mt-6" style={{ color: "rgb(68, 75, 112)" }}>לשיחה עם נציג השאירו פרטים</h1>



            {/* <div className="flex formgroup-inline mx-0"> */}

            <div class="formgrid grid">
                <div className="field col mr-8">
                    {/* <label for="firstname2">Firstname</label> */}
                    <input id="name1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder="שם" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="field col">
                    {/* <label for="lastname2">Lastname</label> */}
                    <input id="mail1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder="אימייל" onChange={(e) => {
                        setMail(e.target.value)
                    }} />
                </div>
                <div className="field col ml-8">
                    {/* <label for="lastname2">Lastname</label> */}
                    <input id="phone1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder="טלפון" onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                </div>
            </div>
            <BasicEditor func={textContact}></BasicEditor>


            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} className="text-white bg-yellow-500 border-yellow-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 m-4"/>
            </div>
            {/* <button type="button" className="text-white bg-yellow-500 border-yellow-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 m-4"
            onClick={() => {
                if (name && mail && phone) {
                    postDataFunc('user/sendMailforNotRegist', { userName: name, userMail: mail, userPhone: phone, content: text })
                    show();
                }
                else {
                    alert("חובה למלא נתונים אישיים")
                }
                // if()
            }}>שליחה</button> */}
    </div>
        {/* </div> */ }



    </>)

}