import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import english from '../../../img/english.jpg'
import "./CardDesign.css"
import Material from '../Material';
import GetPageQ from '../GetPageQ';
import {useNavigate} from "react-router-dom"

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
                
                return  <div style={{marginLeft: "10rem"}} >
            {/* {console.log(flagLevel)} */}
            {<Material idlevel={props.idlevel} subsubject={props.subsubject}></Material>}
            {<GetPageQ idlevelorsubject={props.idlevel} type={1} ></GetPageQ>}
            {/* {flagLevel &&<button onClick={()=><Quiz idlevelorsubject={selectedlevel.idlevel}idsub={selectedSubject.idsubject}leveldescription={selectedlevel.description}></Quiz>}>למעבר לבוחן</button>}     */}
          {/* {flagLevel && <button onClick={()=> {return navigate("/Quiz/1/3")}}>למעבר לבוחן</button>} */}
          {/* selectedlevel.idlevel */}
          {<Button style={{backgroundColor:"#4caffe" ,borderBlock:"#4caffe",border:"#4caffe"}}onClick={()=> {return navigate(`/Quiz/${ props.idlevel}/${props.idsubject}/${props.subsubject}`)}}>למעבר לבוחן</Button>}
      </div>
    }}>
              <p className="m-0">
                <span style={{margin:"8px"}}>{`${props.subsubject}`}</span>
                {`רמה  ${props.level}`}
                {/* <p style={{cursor:"pointer"}}>כניסה</p> */}
                <br></br>
{                props.Did==0&& <span  style={{margin:"8px"}}>הייתי</span>}
{                props.Did==1&& <span  style={{margin:"8px"}}> לא הייתי</span>

}                </p>
            </Card>
        </div>
    )
}