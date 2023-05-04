
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import  { useEffect, useState } from "react";
import "../styles/Tirgul.css"
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function UpdateMaterial(props) {
    const [data, setData] = useState("");
    const [id, setId] = useState(0);
    const { getDataFunc ,updateDataFunc} = useDataFunctions();




    const toast = useRef(null);

    const show = () => {
        // toast.current.show
        toast.current.show({ severity: 'success', detail: 'עודכן בהצלחה!!' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats" >
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const formik = useFormik({
        initialValues: {
            blog: data
        },
        validate: (data) => {
            let errors = {};

            if ( data.blog === "") {
                
                errors.blog = 'נדרש מלל';
            }
            
            if ( !data.blog ) {
                
                errors.blog = ' לא נמצא שינוי';
            }

            return errors;
        },
        onSubmit:async (data) => {
            data.blog && show();
            // formik.resetForm();
            await updateDataFunc((`material/${id}`),{description:data.blog})
            .then((data)=>{
               console.log(data)
              
            })
            getData()  
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };


    // useEffect(()=>{
    //     console.log("set field value");
    //     console.log({data});
    //     formik.setFieldValue('blog',data)
    //     // console.log({values:formik.values});
    // },[data])

    useEffect(()=>{
        console.log({values:formik.values});

    },[formik.values.blog])

    const getData=()=>{
        const idlevel = props.idlevel;
        getDataFunc(`material/${idlevel}`).then(
          (data1) => {
            console.log("===",{data1});
            if(data1){
                console.log("=====",data1[0].description);
                formik.setFieldValue('blog',data1[0].description)
                console.log({blog:formik.values.blog});
                setId(data1[0].idmaterial)
        }
          }
        );
    }
   // console.log("mat",mat)
    useEffect(()=>{
        getData()
    },[])


    return (<>
        {<div className="card" style={{ width:'50%'}}>
            <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />
                <Editor
                    id="blog"
                    name="blog"
                    value={formik.values.blog}
                    headerTemplate={header}
                    onTextChange={(e) => {
                        formik.setFieldValue('blog', e.textValue);
                        // setData( e.textValue)
                    }}
                    style={{ height: '320px',fontSize:'30px',direction:'ltr'}}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}
                    <Button type="submit" label="עדכן" />
                </div>
            </form>
        </div>}
        </>
    )
}
        
// import React, { useRef } from "react";
// import { useFormik } from 'formik';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Button } from 'primereact/button';
// import { classNames } from 'primereact/utils';
// import { Toast } from 'primereact/toast';
// import useGetData from '../../Hooks/useGetData';
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import  { useEffect, useState } from "react";
// import "../styles/Tirgul.css"


// export default function UpdateMaterial(props) {
//     const [data, setData] = useState(null);
//     const [mmat, setMmat] = useState(" ");

//     const { getDataFunc ,updateDataFunc} = useDataFunctions();
//     const mat=props.material;
//    // console.log("mat",mat)
//     useEffect(()=>{
//         const idlevel = props.idlevel;
//         getDataFunc(`material/${idlevel}`).then(
//           (data1) => {
//             setData(data1[0].description)
  
      
//           }
//         );
//     },[])
//     useEffect(()=>{console.log("fff",data)},[data])
//     const toast = useRef(null);

//     const show = () => {
//         toast.current.show({summary: 'עודכן', detail: formik.values.description  });
//     };

  
    
//     const formik = useFormik({
//         initialValues: {
//             description:data
//         },
//         validate: (data) => {
//             let errors = {};

//             if (!data.description) {
//                 errors.description = 'לא היו שינויים';
//             }

//             return errors;
//         },
//         onSubmit: (data) => {
//             data && show();
//             formik.resetForm();
//         }
//     });


//     const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

//     const getFormErrorMessage = (name) => {
//         return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
//     };
//     let mm=""


//     function update(){
//      console.log("dd",mm)
//    //const cc=document.getElementById("description").value;
//      updateDataFunc((`material/${props.idlevel}`),{description:mmat})
//      .then((data)=>{
//         console.log(data)
       
//      })  
//     }
//     return (<>
//     {data!==""&&
//         <div  className="card-container blue-container flex align-items-center justify-content-start" style={{ marginRight: "11%" }}>
//         <div className="card flex justify-content-center">
//             <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
//                 <label htmlFor="description">Description</label>
//                 <Toast ref={toast} />
//                 <InputTextarea
//                     inputId="description"
//                     name="description"
//                     rows={4}
//                     cols={30}
//                     className={classNames({ 'p-invalid': isFormFieldInvalid('description') })}
//                     value={formik.values.description}
//                     onChange={(e) => {
//                         formik.setFieldValue('description', e.target.value);
//                     }}
//                 />
//                 {getFormErrorMessage('description')}
//                 <Button label="עדכן" type="submit" icon="pi pi-check" style={{border: "1px ,solid: #3b82f6",color: "#000000",background:" #ffffff"}}/>
//             </form>
//         </div>
//         </div>}
//         </>
//     )
// }
        





            {/* <textarea 
                      //value={mm} 
                      rows={4}
                      cols={30}
                      defaultValue={"fd"}
                      onChange={(e) => {
                        mm= e.target.value
                        console.log("m",mm) 
                        setMmat(e.target.value)
                        formik.setFieldValue('description', e.target.value);
                        }}
                        onBlur={(e)=>{
                            setMmat(mm)
                            console.log("on blur",mmat)
                        }}
                        > </textarea>
                    <br></br>
           <Button label="עדכן" type="submit" icon="pi pi-check" onClick={update} style={{marginTop:"5px"}}/> */}

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
//         getDataFunc(`material/${idlevel}`).then(
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
//         getDataFunc(`material/${idlevel}`).then(
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
//         getDataFunc(`material/${idlevel}`).then(
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
//         getDataFunc(`material/${idlevel}`).then(
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