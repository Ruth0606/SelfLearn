// import { Fieldset } from 'primereact/fieldset';
// import useGetData from '../../Hooks/useGetData';
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import React, { useEffect, useState } from "react";
// import "../styles/Tirgul.css"


// export default function UpdateMaterial(props) {
//     const [data, setData] = useState(null);
//     const { getDataFunc } = useDataFunctions();

//     useEffect(()=>{
//         const idlevel = props.idlevel;
//         getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
//           (data) => {
//             setData(data[0].description)
//        console.log(data[0].description)
//           }
//         );
//     })


//     return (
        
//         <div className="card">
//             <Fieldset legend={props.subsubject}>
//                 <p className="m-0">{data}</p>
//             </Fieldset>
//         </div>
//     )
// }

// import React, { useRef } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';
// import { classNames } from 'primereact/utils';
// import { InputTextarea } from "primereact/inputtextarea";
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import  { useEffect, useState } from "react";
// import "../styles/Tirgul.css"


// export default async function UpdateMaterial(props) {
//     const [data, setData] = useState(null);
//     const { getDataFunc } = useDataFunctions();
    
//    await useEffect(()=>{
//         const idlevel = props.idlevel;
//         getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
//           (data) => {
//             setData(data[0].description)
//        console.log(data[0].description)
//           }
//         );
//     },[])
//     const toast = useRef(null);

//     const show = () => {
//         toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('description') });
//     };

//     const defaultValues = { description: data};
//     const form = useForm({ defaultValues });
//     const errors = form.formState.errors;

//     const onSubmit = (data) => {
//         data.description && show();

//         form.reset();
//     };

//     const getFormErrorMessage = (name) => {
//         return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
//     };

//     return (
//         <div className="card flex justify-content-center">
//             <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
//                 <Toast ref={toast} />
//                 <Controller
//                     name="description"
//                     control={form.control}
//                     rules={{ required: 'Description is required.' }}
//                     render={({ field, fieldState }) => (
//                         <>
//                             <label htmlFor={field.name}>Description</label>
//                             <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
//                             {getFormErrorMessage(field.name)}
//                         </>
//                     )}
//                 />
//                 <Button label="Submit" type="submit" icon="pi pi-check" />
//             </form>
//         </div>
//     )
// }
        

import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import useGetData from '../../Hooks/useGetData';
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import  { useEffect, useState } from "react";
import "../styles/Tirgul.css"


export default function UpdateMaterial(props) {
    const [data, setData] = useState(null);
    const { getDataFunc } = useDataFunctions();

    useEffect(()=>{
        const idlevel = props.idlevel;
        getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
          (data) => {
            setData(data[0].description)
       console.log(data[0].description)
          }
        );
    },[])
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.description  });
    };

    const formik = useFormik({
        initialValues: {
            description: data
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <label htmlFor="description">חומר</label>
                <Toast ref={toast} />
                <InputTextarea
                    inputId="description"
                    name="description"
                    rows={4}
                    cols={30}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('description') })}
                    value={formik.values.description}
                    onChange={(e) => {
                        formik.setFieldValue('description', e.target.value);
                    }}
                />
                {getFormErrorMessage('description')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        


// import React, { useState } from "react";
// import { InputTextarea } from "primereact/inputtextarea";

// import useGetData from '../../Hooks/useGetData';
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import  { useEffect } from "react";
// import "../styles/Tirgul.css"


// export default function UpdateMaterial(props) {
//     const [data, setData] = useState('');
//     const { getDataFunc } = useDataFunctions();

//     useEffect(()=>{
//         const idlevel = props.idlevel;
//         getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
//           (data) => {
//             setData(data[0].description)
//        console.log(data[0].description)
//           }
//         );
//     })
//     ///const [value, setValue] = useState('');

//     return (
//         <div className="card flex justify-content-center">
//             <InputTextarea value={data} onChange={(e) => setData(e.target.value)} rows={5} cols={30} />
//         </div>
//     )
// }
// import React, { useState } from 'react';
// import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
// import { InputText } from 'primereact/inputtext';
// import useGetData from '../../Hooks/useGetData';
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import  { useEffect } from "react";
// import "../styles/Tirgul.css"


// export default function UpdateMaterial(props) {
//     //const [data, setData] = useState('');
//     const { getDataFunc } = useDataFunctions();
//     var data1;
//     useEffect(()=>{
//         const idlevel = props.idlevel;
//         getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
//           (data) => {
//             data1=data[0].description
//        console.log(data[0].description)
//           }
//         );
//     },[])
//     const [text, setText] = useState('');

//     return (
//         <div className="card">
//             <Inplace closable>
//                 <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
//                 <InplaceContent>
//                     <InputText value={data1} onChange={(e) => setText(e.target.value)} autoFocus />
//                 </InplaceContent>
//             </Inplace>
//         </div>
//     );
// }