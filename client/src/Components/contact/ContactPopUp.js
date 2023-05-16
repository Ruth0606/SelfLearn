import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function ContactPopUp(props) {
    // const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="לא" icon="pi pi-times" onClick={() => props.setOpen(false)} className="p-button-text" />
            <Button label="כן" icon="pi pi-check" onClick={() => props.setOpen(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog header="Header" visible={props.open} style={{ width: '50vw' }} onHide={() => props.setOpen(false)} footer={footerContent}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
         














// <Dialog
//             header="שאלה"
//             visible={visible}
//             style={{ width: "50vw" }}
//             onHide={() => setVisible(false)}
//             footer={footerContent}
//           >
//             <label className="m-0">הכנס שאלה</label>
//             <input type={"text"} id="question" className="m-0"></input>
//             <input
//               type={"label"}
//               className="m-0"
//               value={"הכנס תשובה 1"}
//             ></input>
//             <input type={"text"} id="ans1" className="m-0"></input>
//             <input
//               type={"label"}
//               className="m-0"
//               value={"הכנס תשובה 2"}
//             ></input>
//             <input type={"text"} id="ans2" className="m-0"></input>
//             <input
//               type={"label"}
//               className="m-0"
//               value={"הכנס תשובה 3"}
//             ></input>
//             <input type={"text"} id="ans3" className="m-0"></input>
//             <input type={"label"} className="m-0" value={"ניקוד"}></input>
//             <input type={"text"} id="score" className="m-0"></input>

//             <input type={"label"} className="m-0" value={"תשובה נכונה"}></input>
//             <input type={"text"} id="correctAns" className="m-0"></input>
//           </Dialog>