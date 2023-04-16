import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import TirgulQ from "../tirgul/TirgulQ";
import useGetData from "../../Hooks/useGetData";
import GetPageQ from "../tirgul/GetPageQ";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import "../styles/Tirgul.css"
import Material from "../tirgul/Material";
import Quiz from '../test/Quiz'
import {useNavigate} from "react-router-dom"
import UpdateMaterial from "./UpdateMaterial";
        
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import "../styles/UpdateData.css"



 
export default function SelectMaterial() {
    //const [visible, setVisible] = useState(false);
const {postDataFunc}=useDataFunctions()

function addClass(e){
    setVisiblec(false);
    const r=document.getElementById("class").value;   
     postDataFunc(("http://localhost:8000/data/class"),{description:r})
     .then((data)=>{
        console.log(data)
       // setArrClass(...[arrclass],data)
       setArrClass([...arrclass,data])
     }) 
}

function addSubject(e){
    setVisibles(false);
    const sub=document.getElementById("subject").value;
    const mark=document.getElementById("mark").value;
     postDataFunc(("http://localhost:8000/data/subject"),{description:sub,idclass:selectedClass.idclass,passing_grade:mark})
     .then((data)=>{
        console.log(data)
       // const arr=[[...arrsubjects],data]
        setArrsubjects([...arrsubjects,data])
     })  
}
function addSubsubject(e){
    setVisibless(false);
    const sub=document.getElementById("subsubject").value;
     postDataFunc(("http://localhost:8000/data/subsubject"),{description:sub,idsubject:selectedSubject.idsubject})
     .then((data)=>{
        console.log(data)
        setArrsubsubjects([...arrsubsubjects,data])
     })  
}
function addLevel(e){
    setVisiblel(false);
    const lev=document.getElementById("level").value;
     postDataFunc(("http://localhost:8000/data/level"),{description:lev,idsubsubject:selectedSubsubject.idsubsubject})
     .then((data)=>{
        console.log(data)
        setArrlevels([...arrlevels,data])
     })  
}
    const footerContent = (
        <div>
          {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
            <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addClass(e)} autoFocus />
        </div>
    );
    const footerContentSub = (
        <div>
          {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
            <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addSubject(e)} autoFocus />
        </div>
    );
    const footerContentSubsub = (
        <div>
          {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
            <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addSubsubject(e)} autoFocus />
        </div>
    );
    const footerContentLevel = (
        <div>
        
            <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addLevel(e)} autoFocus />
        </div>
    );
  const { getDataFunc } = useDataFunctions();
  const navigate = useNavigate();
  let idlevel = null;
  const [visiblec, setVisiblec] = useState(false);
  const [visibles, setVisibles] = useState(false);
  const [visibless, setVisibless] = useState(false);
  const [visiblel, setVisiblel] = useState(false);

  const [flagClass, setflagClass] = useState(true);
  const [flagSubject, setflagSubject] = useState(true);
  const [flagSubsubject, setflagSubsubject] = useState(true);
  const [flagLevel, setflagLevel] = useState(false);


  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubsubject, setSelectedSubsubject] = useState(null);
  const [selectedlevel, setSelectedlevel] = useState(null);

 const [arrclass, setArrClass] = useState([]);
  const [arrsubjects, setArrsubjects] = useState([]);
  const [arrsubsubjects, setArrsubsubjects] = useState([]);
  const [arrlevels, setArrlevels] = useState([]);
  const {
    data: dataClass,
    error,
    loading,
    refetch,
  } = useGetData("http://localhost:8000/data/class");

  useEffect(() => {setArrClass(dataClass)},selectedClass)

  useEffect(() => {
    
    if (selectedClass != null) {
      const idclass = selectedClass.idclass;
      getDataFunc(`http://localhost:8000/data/subject/${idclass}`).then(
        (data) => {
          // console.log(data);
          setArrsubjects (data) ;
          // data.forEach(element => {
          //     arrsubjects.push({"description":element.description,"id":element.id})
          // });
          // console.log("arrsubjects", arrsubjects);
        }
      );

    }
  }, [selectedClass]);

  useEffect(() => {
    if (selectedSubject != null) {
      const idsubject = selectedSubject.idsubject;
      getDataFunc(`http://localhost:8000/data/subsubject/${idsubject}`).then(
        (data) => {
         
          setArrsubsubjects (data) ;
         // console.log("setArrsubsubjects", arrsubsubjects);
        }
      );
    }
  }, [selectedSubject]);


  useEffect(() => {
    if (selectedSubsubject != null) {
      const idsubsubject = selectedSubsubject.idsubsubject;
      getDataFunc(`http://localhost:8000/data/level/${idsubsubject}`).then(
        (data) => {
        
          setArrlevels (data) ;
          //console.log("setArrsubsubjects", arrsubsubjects);
        }
      );
    }
  }, [selectedSubsubject]);
  


  return loading ? (
    <div>loading</div>
  ) : (
    <div className="card flex justify-content-center" style={{ margin: "3%"}}>

 
        
      {dataClass.length && (
        <Dropdown
      
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.value);
            setflagClass(false);
            //console.log(e.value);
          }}
          options={dataClass}
          optionLabel="description"
          placeholder="בחר כיתה"
          className="Dropdown"
          style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%",backgroundColor:" #f9f9f9 ",borderColor: "#4CAF50"}}
        />
      )}
      <div className="card flex justify-content-center">
            <Button label=" הוסף כיתה "    icon="pi pi-plus" onClick={() => setVisiblec(true)} />
            <Dialog header="כיתה" visible={visiblec} style={{ width: '50vw' }} onHide={() => setVisiblec(false)} footer={footerContent}>
                <input type={"text"} id="class"className="m-0"></input>
            </Dialog>
        </div>
      <Dropdown
        disabled={flagClass}
        value={selectedSubject}
        onChange={(e) => {
          setSelectedSubject(e.value);
          setflagSubject(false);
        }}
        options={arrsubjects}
        optionLabel="description"
        placeholder="בחר מקצוע"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      />
         <div className="card flex justify-content-center">
            <Button label="הוסף מקצוע" icon="pi pi-plus" onClick={() => setVisibles(true)} />
            <Dialog header="מקצוע" visible={visibles} style={{ width: '50vw' }} onHide={() => setVisibles(false)} footer={footerContentSub}>
                <input type={"text"} id="subject"className="m-0" placeholder="תאור"></input>
                <input type={"text"} id="mark"className="m-0" placeholder="ציון עובר"></input>
            </Dialog>
        </div>
      <Dropdown
        disabled={flagSubject}
        value={selectedSubsubject}
        onChange={(e) => {
          setSelectedSubsubject(e.value);
          setflagSubsubject(false);
        }}
        options={arrsubsubjects}
        optionLabel="description"
        placeholder="בחר נושא"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%",width:"15%" }}
      />
          <div className="card flex justify-content-center">
            <Button label="הוסף נושא" icon="pi pi-plus" onClick={() => setVisibless(true)} />
            <Dialog header="נושא" visible={visibless} style={{ width: '50vw' }} onHide={() => setVisibless(false)} footer={footerContentSubsub}>
                <input type={"text"} id="subsubject"className="m-0" placeholder="תאור"></input>
            </Dialog>
        </div>
      <Dropdown
        disabled={flagSubsubject}
        value={selectedlevel}
        onChange={(e) => {
          setSelectedlevel(e.value);
          setflagLevel(true);
          idlevel = e.value.idlevel;
        }}
        options={arrlevels}
        optionLabel="description"
        placeholder="בחר רמה"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      />
                <div className="card flex justify-content-center" style={{marginBottom:"9px"}}>
            <Button label="הוסף רמה" icon="pi pi-plus" onClick={() => setVisiblel(true)} />
            <Dialog header="רמה" visible={visiblel} style={{ width: '50vw' }} onHide={() => setVisiblel(false)} footer={footerContentLevel}>
                <input type={"text"} id="level"className="m-0" placeholder="תאור"></input>
            </Dialog>
        </div>
      {flagLevel && <UpdateMaterial idlevel={selectedlevel.idlevel} subsubject={selectedSubsubject.description}></UpdateMaterial>}

    {/* {flagLevel && <GetPageQ idlevelorsubject={selectedlevel.idlevel} type={1}></GetPageQ>} */}
    {/* {flagLevel && <button onClick={()=> {return navigate("/Quiz",{idlevelorsubject: selectedlevel.idlevel,idsub:selectedSubject.idsubject,leveldescription:selectedlevel.description})}}>למעבר לבוחן</button>} */}

      </div>
  );
}