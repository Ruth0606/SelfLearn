import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { MegaMenu } from "primereact/megamenu";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
// import Bell from './Bell';
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "../styles/home.css"
// import 'primeflex/primeflex.css';                                   // css utility
//import "./design/index.css";
//import "./design/flags.css";
import UserProfile from "./UserProfile";
import UserTab from "./UserTab";
import { useNavigate } from "react-router-dom";



const TabMenuIn = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "צור קשר",
      // icon: "pi pi-comments",
      icon: "pi pi-whatsapp",
      command: () => {
        navigate("/contact");
      },
    },
    {
      label: "התחל תרגול",
      icon: "pi pi-file-edit",
      command: () => {
        navigate("/Tirgul")      },
    },
    { label: "Credits", icon: "pi pi-credit-card",command:()=>{navigate("/credits")} },
    { label: "Return Certificates", icon: "pi pi-fw pi-file",command:()=>{navigate("/credits")} },
    { label: "Credit for Sale", icon: "pi pi-cart-plus",command:()=>{navigate("/creditForSale")} },
    { label: "Club", icon: "pi pi-tags" },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const end = (
    <div className="flex justify-content-start flex-wrap card-container blue-container sm:mr-0 ">
      <UserTab></UserTab>
    </div>
  );




  
  return (<>
    <React.StrictMode>
      <div className="card">
        <MegaMenu  style={{direction:"ltr"}}
          model={items}
          orientation="horizontal"
          start={start}
          end={end}
          breakpoint="960px"
        />
      </div>
      
    </React.StrictMode>
    <button onClick={() => { navigate('/marks') }}>ציונים</button>


            <button onClick={()=>navigate("/Update")}>מנהל</button>




             <button onClick={() => navigate("/StudentList")}>לרשימת תלמידים</button>
           {/* <button onClick={() => navigate("/StudStatistical")}>נתונים סטטיסטיים על תלמיד</button> */}
    </>
  );
};

export default TabMenuIn;
