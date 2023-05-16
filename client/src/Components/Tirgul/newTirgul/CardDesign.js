import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import english from '../../../img/english.jpg'
import "./CardDesign.css"
import Material from '../Material';
import GetPageQ from '../GetPageQ';
import {useNavigate} from "react-router-dom"
import x from "../../../img/x.png"
import v from "../../../img/v.png"


export default function CardDesign(props) {
    const navigate = useNavigate();
    const header = (<><img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" /></> 
        // <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
        // <img src={english} alt="english" style={{hight:"15px"}}/>
    );
    // const footer = (
    //     <div className="flex flex-wrap justify-content-end gap-2">
    //         <Button label="Save" icon="pi pi-check" />
    //         <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
    //     </div>
    // );

    return (
        <div className="card flex justify-content-center">
            {/* <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem"> */}
           
            <Card title={` כיתה ${props.class} `} subTitle={`${props.subject}`} header={header} className="md:w-15rem h-15rem" style={{cursor:"pointer",margin:"8px",textAlign:"center",padding:"0px"}}
            onClick={(e)=>{
                
               return navigate(`/Helper/${props.idlevel}/${props.idsubject}/${props.level}/${props.subsubject}`);
    }}>
              <p className="m-0">
                <span style={{margin:"8px"}}>{`${props.subsubject}`}</span>
                {`רמה  ${props.level}`}
                {/* <p style={{cursor:"pointer"}}>כניסה</p> */}
                <span  style={{textAlign:'left'}}>
                {props.Did==1&& <img
                    alt="x"
                    src={x}
                    height="40"
                    className="mr-2"
                    style={{marginBottom:"0px",width:"30px",height:"30px",textAlign:'left'}}
                    >
                    </img>}
                    {props.Did==0&& <img
                    alt="v"
                    src={v}
                    height="60"
                    className="mr-2"
                    style={{marginBottom:"0px",width:"30px",height:"30px",textAlign:'left'}}
                    >
                    </img>}
                </span>
{/* {                props.Did==0&& <span  style={{margin:"8px"}}>הייתי</span>}
{                props.Did==1&& <span  style={{margin:"8px"}}> לא הייתי</span>

}           */}
      </p>
            </Card>
        </div>
    )
}