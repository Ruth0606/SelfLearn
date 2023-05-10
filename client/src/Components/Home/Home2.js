import {useContext} from "react";
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
import UserContext from "../user/UserContext";
import logoC from "../../img/logoC.png";
import ContactNotRegister from "../contact/ContactNotRegister"
import { BrowserRouter, Route, Link } from 'react-router-dom';


const TabMenuIn = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  let items=[]
  const a=localStorage.getItem("user");

console.log(a);
  if(a==undefined){

   items = [
    {
      label: "יצירת קשר",
      // icon: "pi pi-comments",
      icon: "pi pi-whatsapp",
      command: () => {
        if(JSON.parse(localStorage.getItem('user')))
              navigate("/contact");
        // else{      
        //   navigate("/ContactNotRegister");
        // }      
      },
    },
    {
      label: "בואו נתרגל",
      icon: "pi pi-file-edit",
      command: () => {
        JSON.parse(localStorage.getItem('user'))&&
        navigate("/Tirgul")      },
    },
   { label: "השגים", icon: "pi pi-check-square",command:()=>{JSON.parse(localStorage.getItem('user'))&&navigate('/marks')} },
    // pi-chart-line
    { label: " סטטיסטיקה", icon: "pi pi-chart-line",command:()=>{JSON.parse(localStorage.getItem('user'))&&navigate("/StudStatistical")} }
    // { label: "Credit for Sale", icon: "pi pi-cart-plus",command:()=>{navigate("/creditForSale")} },
    // { label: "Club", icon: "pi pi-tags" },
  ];
}
else if(JSON.parse(a).ismanager==0){
    
  items = [
   {
     label: "יצירת קשר",
     // icon: "pi pi-comments",
     icon: "pi pi-whatsapp",
     command: () => {
     
       navigate("/contact");
     },
   },
   {
     label: "בואו נתרגל",
     icon: "pi pi-file-edit",
     command: () => {
       JSON.parse(localStorage.getItem('user'))&&
       navigate("/Tirgul")      },
   },
  { label: "השגים", icon: "pi pi-check-square",command:()=>{JSON.parse(localStorage.getItem('user'))&&navigate('/marks')} },
   // pi-chart-line
   { label: " סטטיסטיקה", icon: "pi pi-chart-line",command:()=>{JSON.parse(localStorage.getItem('user'))&&navigate("/StudStatistical")} }
   // { label: "Credit for Sale", icon: "pi pi-cart-plus",command:()=>{navigate("/creditForSale")} },
   // { label: "Club", icon: "pi pi-tags" },
 ];
}
else if(JSON.parse(a).ismanager!=0){
   items = [
    {
      label: "יצירת קשר",
      // icon: "pi pi-comments",
      icon: "pi pi-whatsapp",
      command: () => {
        navigate("/contact");
      },
    },
    {
      label: "בואו נתרגל",
      icon: "pi pi-file-edit",
      command: () => {
        navigate("/Tirgul")      },
    },
   { label: "השגים", icon: "pi pi-check-square",command:()=>{navigate('/marks')} },
    // pi-chart-line
    { label: "סטטיסטיקה", icon: "pi pi-chart-line",command:()=>{navigate("/Statistical")} },
    { label: "חומרים", icon: "pi pi-refresh",command:()=>{navigate("/update")} },
    { label: "משתמשים", icon: "pi pi-list" ,command:()=>{navigate("/StudentList")}},
  ];

}
  const start = (
    <img
       alt="logo"
      src={logoC}
      height="100"
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
      <div className="card border-top-2 border-orange-300 surface-overlay justify-content-center">
        <MegaMenu style={{direction:"ltr"}}//,position:"fixed",width:"100%",zIndex:"5",marginTop:"0rem"
          model={items}
          orientation="horizontal"
          start={start}
          end={end}
          breakpoint="960px"
        />
      </div>
      
    </React.StrictMode>
    

    
    </>
  );
};

export default TabMenuIn;
