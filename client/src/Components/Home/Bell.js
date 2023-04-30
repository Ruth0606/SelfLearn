//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { Badge } from 'primereact/badge';
import { TiWarningOutline } from "react-icons/ti";
import { TiWarning } from "react-icons/ti";
import "../styles/home.css"

const Bell=() =>{
    const menu = useRef(null);
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'התראות מערכת',
            items: [
                {
                    label: '  1 Week',
                    icon: <TiWarningOutline size={"18"}/> ,
                    command: () => {
                        
                    }
                },
                {
                    label: '  3 Week',
                    icon: <TiWarning size={"18"}/> ,
                    command: () => {
                        
                    }
                }
            ]
        },
        // {
        //     label: 'Navigate',
        //     items: [
        //         {
        //             label: 'React Website',
        //             icon: 'pi pi-external-link',
        //             url: 'https://reactjs.org/'
        //         },
        //         {
        //             label: 'Router',
        //             icon: 'pi pi-upload',
        //             command:(e) => {
        //                 //router.push('/fileupload');
        //             }
        //         }
        //     ]
        // }
    ];


    const icon=<i className="pi pi-bell p-overlay-badge"    style={{ fontSize: '1.5rem' }}>
            <Badge value="2" style={{"background":"#DEE2E6"}}></Badge>
            </i> 
    


    return (
            <>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} />
           
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem',"color":"orange" }} onClick={(e) => menu.current.toggle(e)} >
                <Badge value="2" style={{"fontSize":"0.5rem","boxSizing":"0.5rem"}}></Badge>
            </i>
            </>
    )
}

export default  Bell