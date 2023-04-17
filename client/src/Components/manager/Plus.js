
import React, { useRef,useEffect, useState } from 'react';
//import React, { useEffect, useState } from "react";

import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Plus() {
    // function addClass(e){
    //     // setVisibles(false);
    //     // const sub=document.getElementById("subject").value;
    //     // const mark=document.getElementById("mark").value;
    //     //  postDataFunc(("http://localhost:8000/data/subject"),{description:sub,idclass:selectedClass.idclass,passing_grade:mark})
    //     //  .then((data)=>{
    //     //     console.log(data)
    //     //    // const arr=[[...arrsubjects],data]
    //     //     setArrsubjects([...arrsubjects,data])
    //     //  })  
    //     alert("ff")
    // }
    // const [visiblec, setVisiblec] = useState(false);

    // const footerContent = (
    //     <div>
    //       {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
    //         <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addClass(e)} autoFocus />
    //     </div>
    // );
    const toast = useRef(null);
    const items = [
        // {
        //     label: 'Add',
        //     icon: 'pi pi-pencil',
        //     command: () => {
        //         toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        //     }
        // },
        {
            label: 'Update',
            icon: 'pi pi-refresh',   
            onclick:()=>alert('SECOND'),
            // command: () => {
            // //    setVisiblec(true);
            // //     <Dialog header="כיתה" visible={visiblec} style={{ width: '50vw' }} onHide={() => setVisiblec(false)} footer={footerContent}>
            // //     <input type={"text"} id="class"className="m-0"></input>
            // //     </Dialog>
            //  toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            // }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        // {
        //     label: 'React Website',
        //     icon: 'pi pi-external-link',
        //     command: () => {
        //         window.location.href = 'https://facebook.github.io/react/';
        //     }
        // }
    ];

    return (
        <div >
            {/* <div style={{ height: '500px' }}> */}
                <Toast ref={toast} />
            {/* <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} /> */}
                <SpeedDial model={items} direction="down" style={{ right:"35%",height: '300px'}} />
{/* // <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} /> */}
            {/* </div> */}
        </div>
    )
}
        