
import React, { useRef, useState,useContext } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useDataFunctions } from '../../Hooks/useDataFunctions';
import useGetData from '../../Hooks/useGetData';
import UserContext from "../user/UserContext";


export default function HookFormDoc() {
    let Val;
    const [loading, setLoading] = useState(false);

    const load = () => {
       

        setTimeout(() => {
          
        }, 2000);
    };
    const { postDataFunc } = useDataFunctions();
    const toast = useRef(null);

    // const user = useContext(UserContext);

    const [val,setVal]=useState('')
    // const mails = require("../services/mails.js");
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Sent', detail: 'נשלח בהצלחה!' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const defaultValues = {
        blog: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.blog && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div  style={{direction:"rtl"}}>
        <div className="card my-6 mx-6">
            <h1>יצירת קשר</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <Controller 
                    name="blog"
                    control={control}
                    rules={{ required: 'נדרש תוכן.' }}
                    render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e) => {field.onChange(setVal(e.textValue), e.textValue)
 }
                    } style={{ height: '320px' }} />}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}




                    <Button type="submit" label="שלח" loading={loading} icon="pi pi-check" 
                     onClick={()=>{  

                        setLoading(true)
                        load()
                        // console.log('user',user)
                        console.log('user.name',JSON.parse(localStorage.getItem('user')).name) 
                        console.log('user.mail',JSON.parse(localStorage.getItem('user')).mail) 
                        console.log('val',val) 
                    //   debugger
                        postDataFunc(("http://localhost:8000/user/sendMail"),{userName: JSON.parse(localStorage.getItem('user')).name},{userMail:JSON.parse(localStorage.getItem('user')).mail},{content:{val}})
                        setLoading(false)
}
                     }
                    />
                </div>
            </form>
        </div></div>
    )
}