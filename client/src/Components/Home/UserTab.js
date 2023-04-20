
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import UserProfile from './UserProfile';
import Bell from './Bell';

const UserTab=() =>{
    return (
       
            
        <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-end ">
        <div className="flex align-items-center justify-content-center border-round m-2 ">
        
            
        </div>
        <div className="flex align-items-center  border-round m-2 " style={{paddingLeft:"2rem",paddingRight:"1rem"}}>
            <Bell/>
        </div>


        <div className="flex align-items-center justify-content-center border-round m-2 ">
           <UserProfile/>
            
        </div>
        

        </div>
     
    );
}
    

export default  UserTab