
import React, { useRef,useContext } from 'react';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import UserProfile from './UserProfile';
import Bell from './Bell';
import Position from './Position';
import { useNavigate } from "react-router-dom";
import "../styles/home.css"
import UserContext from '../user/UserContext';
import BackToHome from './BackToHome';

const UserTab = () => {
    const navigate = useNavigate()
    const user = useContext(UserContext);


    const a=localStorage.getItem("user");

    return (


        <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-end ">
            <div className="flex align-items-center justify-content-center border-round m-2 ">
            
                  {/* <button onClick={navigate("/")}>חזור לדף הבית</button> */}
            </div>
            {/* <div className="flex align-items-center  border-round m-2 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
                <BackToHome></BackToHome>
            </div> */}
            <div className="flex align-items-center border-round m-2 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
                <Bell />
            </div>

         
                <div className="flex align-items-center justify-content-center border-round  mb-0" style={{ margin: "0rem" }}>
                    <UserProfile />
                </div>
                {a?<div className="flex align-items-center  border-round m-2 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
            <Button label="יציאה" severity="secondary" text onClick={() => { navigate(''); localStorage.clear();}} />
        </div>:<>
        <div className="flex align-items-center  border-round m-0 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
        <Button label="הכנס" severity="secondary" text onClick={() => { navigate('/login'); localStorage.clear();}} />
    </div>
      <div className="flex align-items-center  border-round m-0 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
      <Button label="הרשם" severity="secondary" text onClick={() => { navigate('/Register'); localStorage.clear();}} />
  </div></>
        }
           {/* {user.idstudent&&<div className="flex align-items-center  border-round m-2 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem" }}>
            <Button label="Logout" severity="secondary" text onClick={() => { navigate(''); localStorage.clear();}} />
        </div>} */}
            <div className="flex align-items-center  border-round m-2 " style={{ paddingLeft: "0rem", paddingRight: "0rem", margin: "0rem", padding: "0rem" }}>
                <Position></Position>
            </div>

        </div>

    );
}


export default UserTab