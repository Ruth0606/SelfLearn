
import { Chip } from 'primereact/chip';

import { Badge } from 'primereact/badge';
import{Avatar} from 'primereact/avatar'
//import Bell from '../bell/Bell';

//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import {useNavigate} from 'react-router-dom'
import "../styles/home.css"
import Confirm from './Confirm';


import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
const UserProfile=()=> {
    const menu = useRef(null);


    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'יציאה', life: 3000 });
        nevigate('/xxxx')
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'נדחה', life: 3000 });
    }
   // const router = useRouter();
   const nevigate=useNavigate();;
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/profile')
                    }
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-spin pi-cog',
                   
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/settings')
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Calendar',
                    icon: 'pi pi-calendar',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/calendar')
                    }
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/inbox')
                    }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-power-off',
                    command:(e) => {
                    setVisible(true) 
        //    icon="pi pi-check" label="Confirm" 
                        //router.push('/resiptions');
                        // nevigate('/logout')
                    }
                }
            ]
        }
    ];

    return (
        <>
            <Toast ref={toast}></Toast>



            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to logout?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />



            <Menu model={items} popup ref={menu} />
            {/* <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} /> */}
            <div className="flex align-items-center justify-content-center border-round m-2 ">
            <Avatar icon="pi pi-user" size="large" shape="circle" style={{"background":"none","color":"orange"}} onClick={(e) => menu.current.toggle(e)}/>
            </div>
        </>
    
    )
}
      

export default  UserProfile