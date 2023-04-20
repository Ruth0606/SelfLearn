
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import UserProfile from './UserProfile';
import Bell from './Bell';
import Position from './Position';
import { useNavigate } from "react-router-dom";
import "../styles/home.css"

const UserTab=() =>{
    const navigate = useNavigate()
    return (
       
            
        <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-end ">
        <div className="flex align-items-center justify-content-center border-round m-2 ">
        
            
        </div>
        <div className="flex align-items-center  border-round m-2 " style={{paddingLeft:"0rem",paddingRight:"0rem",margin:"0rem"}}>
            <Bell/>
        </div>


        <div className="flex align-items-center justify-content-center border-round m-2 "style={{margin:"0rem"}}>
           <UserProfile/>
            
        </div>
        <div className="flex align-items-center  border-round m-2 " style={{paddingLeft:"0rem",paddingRight:"0rem",margin:"0rem"}}>
            <Button label="Login" severity="secondary" text onClick={() => { navigate('/login') }}/>
        </div>
        <div className="flex align-items-center  border-round m-2 " style={{paddingLeft:"0rem",paddingRight:"0rem",margin:"0rem",padding:"0rem"}}>
             <Position></Position>
        </div>

        </div>
     
    );
}
    

export default  UserTab