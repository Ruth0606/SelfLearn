import { useEffect , useContext} from "react";

import { Chip } from 'primereact/chip';

import { Badge } from 'primereact/badge';
import{Avatar} from 'primereact/avatar'
//import Bell from '../bell/Bell'
import { Password } from 'primereact/password';

import { Form, Field } from 'react-final-form';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import {json, useNavigate} from 'react-router-dom'
import "../styles/home.css"
import Confirm from './Confirm';
import UserContext from "../user/UserContext";



import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from "primereact/dialog";
const UserProfile=()=> {
    const[password,setPassword]=useState("")
    var user = useContext(UserContext);
    const menu = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
       user=JSON.parse(localStorage.getItem('user'))
       console.log({user});
    }, []);

    useEffect(() => {
        // console.log("storage",JSON.parse(localStorage.getItem('user').password)); 
        // console.log("storage",JSON.parse(localStorage.getItem('user').password)); 
        // console.log("storage",JSON.parse(localStorage.getItem('user').password)); 
        console.log("passwordddddddd",password);
     }, [password]);




    const [visible, setVisible] = useState(false);
    const [visibleProfile, setVisibleProfile] = useState(false);
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
            label: 'הגדרות',
            items: [
                {
                    label: 'פרופיל',
                    icon: 'pi pi-user',
                    command:(e) => {
                    localStorage.getItem("user") &&setVisibleProfile(true)
                        //  nevigate('/setprofil')
                    }
                },
                {
                    label: 'הגדרות',
                    icon: 'pi pi-cog',
                   
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/settings')
                    }
                }
            ]
        },
        {
            label: 'ניתוב',
            items: [
                {
                    label: 'יומן',
                    icon: 'pi pi-calendar',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/calendar')
                    }
                },
                {
                    label: 'תיבת הדואר הנכנס',
                    icon: 'pi pi-inbox',
                    command:(e) => {
                        //router.push('/resiptions');
                        nevigate('/inbox')
                    }
                },
                {
                    label: 'התנתקות',
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
    const a=localStorage.getItem("user");
const footerContent = (
        <div>
            <Button label="יציאה" icon="pi pi-times" onClick={() => setVisibleProfile(false)} className="p-button-text" />
            <Button label="אישור" icon="pi pi-check" onClick={() => {setVisibleProfile(false); 
            if(JSON.parse(localStorage.getItem('user')).id)
            {
                if(JSON.parse(localStorage.getItem('user')).password===password)
                nevigate('/setprofil')
                else{
                    console.log("alerttttt");
                    alert("סיסמה שגויה")
                }
            }
         
            }}  autoFocus />
        </div>
    );

    return (
        <>

            <Dialog  visible={visibleProfile} modal={false} style={{ width: '50vw' }} onHide={() => setVisibleProfile(false)} footer={footerContent} >
               <div>
                <p className="m-3" style={{textAlign:"center"}}>
                על מנת לשנות הגדרות פרופיל עליך להכניס סיסמה לאימות 
                </p>
                <div className="flex justify-content-center"> 
                <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} toggleMask  onBlur={(e)=>{
                setPassword(e.target.value)
                }} style={{direction:"rtl"}}/>
        </div>
                {/* <input type="password" placeholder="סיסמה" style={{width: "300px",height:"30px",marginTop:"10px",marginRight:"0px",}} onBlur={(e)=>{
                setPassword(e.target.value)
                }}></input> */}
                {/* hjgjhg */}






   


       
    


                </div>
                </div>
            </Dialog>
            <Toast ref={toast}></Toast>



            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to logout?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />



            <Menu model={items} popup ref={menu} />
            {/* <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} /> */}
           
            {/* <div className="flex align-items-center justify-content-center border-round m-2 flex-column ">
                <Avatar icon="pi pi-user" size="large" shape="circle" className='m-0 pt-0' style={{"background":"none","color":"orange"}} onClick={(e) => menu.current.toggle(e)}/>
                {user!=null&&user.ismanager==0&&<p className="text-xs mt-0 text-orange-500">{(JSON.parse(localStorage.getItem('user'))).name}</p>}
               {/* { JSON.parse(localStorage.getItem('user'))} */}
               {/* {user.ismanager==1&&<p className="text-xs mt-0 text-orange-500">{JSON.parse(localStorage.getItem('user')).name} - מנהל</p>}   */}
          {/* </div> */}
          <div className="flex align-items-center justify-content-center border-round m-2 flex-column ">
                <Avatar icon="pi pi-user" size="large" shape="circle" className='m-0 pt-0' style={{"background":"none","color":"orange"}} onClick={(e) => menu.current.toggle(e)}/>
                {a&&JSON.parse(localStorage.getItem('user')).ismanager==0&&<p className="text-xs mt-0 text-orange-500">{(JSON.parse(localStorage.getItem('user'))).name}</p>}
               {/* { JSON.parse(localStorage.getItem('user'))} */}
               {a&&JSON.parse(localStorage.getItem('user')).ismanager==1&&<p className="text-xs mt-0 text-orange-500">{JSON.parse(localStorage.getItem('user')).name} - מנהל</p>}  
          </div>
        </>
    
    )
}
      

export default  UserProfile