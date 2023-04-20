// import { Button } from 'primereact/button';
// import { Menu } from 'primereact/menu';
// import { Toast } from 'primereact/toast';
// import React, { useRef } from 'react';
// import { Badge } from 'primereact/badge';
// import { TiWarningOutline } from "react-icons/ti";
// import { TiWarning } from "react-icons/ti";

// const Position=() =>{
//     <div className="flex gap-2 justify-content-center">
//     <Button icon="pi pi-arrow-right" onClick={() => setVisibleRight(true)} />
//     {/* <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
//     <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
//     <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} /> */}
//     </div>

//     return (
//             <>
//             <Toast ref={toast}></Toast>
//             <Menu model={items} popup ref={menu} />
           
//             <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem',"color":"orange" }} onClick={(e) => menu.current.toggle(e)} >
//                 <Badge value="2" style={{"fontSize":"0.5rem","boxSizing":"0.5rem"}}></Badge>
//             </i>
//             </>
//     )
// }

// export default  Position
import "../styles/home.css"

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import Activity from './Activity';
export default function Position() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const navigate = useNavigate();
    // const [visibleTop, setVisibleTop] = useState(false);
    // const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-align-right" onClick={() => setVisibleRight(true)} style={{
                         color: "#000000",
                        background: "#ffffff",
                         border: "1px" ,"solid" :"#d9d9d9",
    /* padding: 0.75rem 1.25rem; */
    fontSize: "1rem",
    /* transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s; */
    borderRadius: "6px",
    borderColor: "#ffffff"
                }}/>
            </div>

            {/* <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar> */}

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2 style={{direction:"rtl"}}>פעילות</h2>
                <div style={{direction:"rtl"}}>
                {/* <Button label="המקום בו עצרת לאחרונה" severity="secondary" text style={{direction:"rtl",fontFamily: "-apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",padding:"0rem"}} icon="pi pi-history" onClick={() => { navigate('/Tirgul') }}/> */}
                <Activity></Activity>
          </div>
            </Sidebar>

            {/* <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar> */}
{/* 
            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar> */}
        </div>
    )
}

