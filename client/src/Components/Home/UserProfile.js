
import { Chip } from 'primereact/chip';

import { Badge } from 'primereact/badge';
import{Avatar} from 'primereact/avatar'
//import Bell from '../bell/Bell';

import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import {useNavigate} from 'react-router-dom'

const UserProfile=()=> {
    const menu = useRef(null);
   // const router = useRouter();
   const nevigate=useNavigate();
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/resiptions')
                    }
                }
            ]
        }
    ];

    return (
        <>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} />
            {/* <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} /> */}
            <div className="flex align-items-center justify-content-center border-round m-2 ">
            <Avatar icon="pi pi-user" size="large" shape="circle" style={{"background":"none","color":"orange"}} onClick={(e) => menu.current.toggle(e)}/>
            </div>
        </>
    
    )
}
      

export default  UserProfile