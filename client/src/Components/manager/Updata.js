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
import Plus from "./Plus";



 
export default function SelectMaterial() {


    //const [visible, setVisible] = useState(false);
const {postDataFunc,updateDataFunc, deleteDataFunc}=useDataFunctions()
  const { getDataFunc } = useDataFunctions();
  const navigate = useNavigate();
  let idlevel = null;
  
  
 

  const [flagClass, setflagClass] = useState(true);
  const [flagSubject, setflagSubject] = useState(true);
  const [flagSubsubject, setflagSubsubject] = useState(true);
  const [flagLevel, setflagLevel] = useState(false);

  const [flag, setflag] = useState(false);


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
          //data.map((el)=>{el.appendChild(<Button>ff</Button>)})
        //  data=data.map((item,i)=><div value="ff"key={i}>{item}</div>)
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
  var mat;
  useEffect(() => {
    if (selectedlevel != null) {
      const idlevel = selectedlevel.idlevel;
      getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
        (data) => {
           mat=data[0].description;
          console.log("maattttt", mat);
          setflag(true)
        }
      );
    }
  }, [selectedlevel]);
////////////////class add
const [visiblec, setVisiblec] = useState(false);

const footerContent = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addClass(e)} autoFocus />
  </div>
);

function addClass(e){
  setVisiblec(false);
  const r=document.getElementById("class").value;   
   postDataFunc(("http://localhost:8000/data/class"),{description:r})
   .then((data)=>{
      console.log(data)
      var newArr= arrclass.push(data)
    //  setArrClass(...[arrclass],data)
     setArrClass(newArr)
   }) 
}

/////////////////class update
const [visibleU, setVisibleU] = useState(false);
const footerContentU = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="עדכן" icon="pi pi-check" onClick={(e) =>updateFunc(e)} autoFocus />
  </div>
);
function updateFunc(e){
  setVisibleU(false);
    const cc=document.getElementById("class").value;
     updateDataFunc((`data/class/${selectedClass.idclass}`),{description:cc})
     .then((data)=>{
        console.log(data)
        data.array.forEach(element => {
          if (element.idclass==selectedClass.idclass){
            element=data
          }
        });
        setArrClass([...arrclass])
     })  
}



/////////////////class delete
const [visiblecd, setVisiblecd] = useState(false);
const footerContentcd = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="מחק" icon="pi pi-check" onClick={(e) =>deleteFunc(e)} autoFocus />
  </div>
);
function deleteFunc(e){
  setVisiblecd(false);
    //const cc=document.getElementById("class").value;
    deleteDataFunc((`data/class/${selectedClass.idclass}`))
     .then((data)=>{
        console.log(data)
        // data.array.forEach(element => {
        //   if (element.idclass==selectedClass.idclass){
        //     element=data
        //   }
        // });
        setArrClass([...arrclass].filter((el)=>el.idclass!=selectedClass.idclass))

     })  
}



////////////////subject add
const [visibles, setVisibles] = useState(false);
const footerContentSub = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addSubject(e)} autoFocus />
  </div>
);

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

/////////////////subject update
const [visibleUS, setVisibleUS] = useState(false);
const footerContentUS = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="עדכן" icon="pi pi-check" onClick={(e) =>updateFuncs(e)} autoFocus />
  </div>
);
function updateFuncs(e){
  setVisibleUS(false);
    const sub=document.getElementById("subject").value;
    const mark=document.getElementById("mark").value;

     updateDataFunc((`data/subject/${selectedSubject.idsubject}`),{description:sub,idclass:selectedClass.idclass,passing_grade:mark})
     .then((data)=>{
        console.log("dd",data)
        // data.array.forEach(element => {
        //   if (element.idsubject==selectedClass.idsubject){
        //     element=data
        //   }
        // });
        // setArrsubjects([...arrsubjects].forEach(element => {
        //   if (element.idsubject==selectedClass.idsubject){
        //     element=data
        //   }
        // }))
        // arrsubjects=arrsubjects.forEach(element => {
        //     if (element.idsubject==selectedClass.idsubject){
        //       element.description=sub;
        //     }
        //   });
        setArrsubjects([...arrsubjects])

     })  
}



/////////////////subject delete
const [visibledS, setVisiblecdS] = useState(false);
const footerContentcdS = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="מחק" icon="pi pi-check" onClick={(e) =>deleteFuncds(e)} autoFocus />
  </div>
);
function deleteFuncds(e){
  setVisiblecdS(false);
    //const cc=document.getElementById("class").value;
    deleteDataFunc((`data/subject/${selectedSubject.idsubject}`))
     .then((data)=>{
        console.log(data)
        // arrsubjects.array.forEach(element => {
        //   if (element.idsubject==selectedClass.idsubject){
        //     arrsubjects.
        //   }
        // }); 
       // arrsubjects.filter((el)=>el.idsubject!=selectedSubject.idsubject) 
        setArrsubjects([...arrsubjects].filter((el)=>el.idsubject!=selectedSubject.idsubject))
     })  
}



////////////////subsubject add
const [visibless, setVisibless] = useState(false);

const footerContentSubsub = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addSubsubject(e)} autoFocus />
  </div>
);

function addSubsubject(e){
  setVisibless(false);
  const sub=document.getElementById("subsubject").value;
   postDataFunc(("http://localhost:8000/data/subsubject"),{description:sub,idsubject:selectedSubject.idsubject})
   .then((data)=>{
      console.log(data)
      setArrsubsubjects([...arrsubsubjects,data])
   })  
}

/////////////////subsubject update
const [visibleUss, setVisibleUss] = useState(false);
const footerContentUss = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="עדכן" icon="pi pi-check" onClick={(e) =>updateFuncss(e)} autoFocus />
  </div>
);
function updateFuncss(e){
  setVisibleUss(false);
  const sub=document.getElementById("subsubjectU").value;
       updateDataFunc((`data/subsubject/${selectedSubsubject.idsubsubject}`),{description:sub,idsubject:selectedSubject.idsubject})
     .then((data)=>{
        console.log(data)
        // data.array.forEach(element => {
        //   if (element.idsubsubject==selectedClass.idsubsubject){
        //     element=data
        //   }
        // });
        // let arrsubsubjects2=[]
        arrsubsubjects=arrsubsubjects.forEach(element => {
          if (element.idsubsubject==selectedSubsubject.idsubsubject){
            console.log(data)
            element.description=selectedSubsubject.description
          }
        });
        setSelectedSubsubject(null)
        setArrsubsubjects([...arrsubsubjects])
      })  
}



/////////////////subsubject delete
const [visiblecdss, setVisiblecdss] = useState(false);
const footerContentcdss = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="מחק" icon="pi pi-check" onClick={(e) =>deleteFuncss(e)} autoFocus />
  </div>
);
function deleteFuncss(e){
  setVisiblecdss(false);
    //const cc=document.getElementById("class").value;
    deleteDataFunc((`data/subsubject/${selectedSubsubject.idsubsubject}`))
     .then((data)=>{
        console.log(data)
        // data.array.forEach(element => {
        //   if (element.idclass==selectedClass.idclass){
        //     element=data
        //   }
        // });
        setArrsubsubjects([...arrsubsubjects].filter((el)=>el.idsubsubject!=selectedSubsubject.idsubsubject))

     })  
}



////////////////level add
const [visiblel, setVisiblel] = useState(false);
const footerContentLevel = (
  <div>
  
      <Button label="הוסף" icon="pi pi-check" onClick={(e) =>addLevel(e)} autoFocus />
  </div>
);

function addLevel(e){
  setVisiblel(false);
  const lev=document.getElementById("level").value;
   postDataFunc(("http://localhost:8000/data/level"),{description:lev,idsubsubject:selectedSubsubject.idsubsubject})
   .then((data)=>{
      console.log(data)
      setArrlevels([...arrlevels,data])
   })  
  }
/////////////////level update
const [visibleUll, setVisibleUll] = useState(false);
const footerContentUll = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="עדכן" icon="pi pi-check" onClick={(e) =>updateFuncll(e)} autoFocus />
  </div>
);
function updateFuncll(e){
  setVisibleUll(false);
  const lev=document.getElementById("level").value;
  updateDataFunc((`data/level/${selectedlevel.idlevel}`),{description:lev,idsubsubject:selectedSubsubject.idsubsubject})
     .then((data)=>{
        console.log(data)
        data.array.forEach(element => {
          if (element.idlevel==selectedlevel.idlevel){
            element=data
          }
        });
        setArrlevels([...arrlevels]) 
           })  
}



/////////////////level delete
const [visiblecdll, setVisiblecdll] = useState(false);
const footerContentcdll = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="מחק" icon="pi pi-check" onClick={(e) =>deleteFuncll(e)} autoFocus />
  </div>
);
function deleteFuncll(e){
  setVisiblecdll(false);
    //const cc=document.getElementById("class").value;
    deleteDataFunc((`data/level/${selectedlevel.idlevel}`))
     .then((data)=>{
        console.log(data)
        // data.array.forEach(element => {
        //   if (element.idclass==selectedClass.idclass){
        //     element=data
        //   }
        // });
        setArrlevels([...arrlevels].filter((el)=>el.idlevel!=selectedlevel.idlevel))

     })  
}
  return loading ? (
    <div>loading</div>
  ) : (
    <div className="card flex justify-content-center" style={{ margin: "3%"}}> 
      {/* <Plus></Plus>  */}
      <Button     icon="pi pi-plus" onClick={() => setVisiblec(true)} />
      {/* label=" הוסף כיתה " */}
            <Dialog header="כיתה" visible={visiblec} style={{ width: '50vw' }} onHide={() => setVisiblec(false)} footer={footerContent}>
                <input type={"text"} id="class"className="m-0"></input>
            </Dialog>

      <Button icon='pi pi-trash' onClick={()=>setVisiblecd(true)}></Button>
      <Dialog visible={visiblecd} style={{ width: '20vw' }} onHide={() => setVisiblecd(false)} footer={footerContentcd}>
                {/* <input type={"text"} id="class"className="m-0"></input> */}
      </Dialog>

      <Button icon='pi pi-refresh' onClick={()=>setVisibleU(true)}/>
      <Dialog header="כיתה" visible={visibleU} style={{ width: '50vw' }} onHide={() => setVisibleU(false)} footer={footerContentU}>
                <input type={"text"} id="class"className="m-0"></input>
            </Dialog>

      {dataClass.length &&   (
        <Dropdown
      
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.value);
            setflagClass(false);
            setflagSubject(true);
             setflagSubsubject(true);
            setflagLevel(true);
            setSelectedSubject(null)

            setSelectedSubsubject(null)
            setSelectedlevel(null)

          ////////////////////////////////////////////////////////////////////todo
            //console.log(e.value);
          }}
          options={dataClass}
          optionLabel="description"
          placeholder="בחר כיתה"
          className="Dropdown"
          style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%",backgroundColor:" #f9f9f9 ",borderColor: "#4CAF50"}}
        />
      )}<br></br>
      {/* <div className="card flex justify-content-center">
            <Button label=" הוסף כיתה "    icon="pi pi-plus" onClick={() => setVisiblec(true)} />
            <Dialog header="כיתה" visible={visiblec} style={{ width: '50vw' }} onHide={() => setVisiblec(false)} footer={footerContent}>
                <input type={"text"} id="class"className="m-0"></input>
            </Dialog>
        </div> */}
        
         <Button     icon="pi pi-plus" onClick={() => setVisibles(true)} />   
      <Dialog header="מקצוע" visible={visibles} style={{ width: '50vw' }} onHide={() => setVisibles(false)} footer={footerContentSub}>
                <input type={"text"} id="subject"className="m-0" placeholder="תאור"></input>
                <input type={"text"} id="mark"className="m-0" placeholder="ציון עובר"></input>
            </Dialog>

      <Button icon='pi pi-trash' onClick={()=>setVisiblecdS(true)}></Button>
      <Dialog visible={visibledS} style={{ width: '20vw' }} onHide={() => setVisiblecdS(false)} footer={footerContentcdS}>
                {/* <input type={"text"} id="class"className="m-0"></input> */}
      </Dialog>

      <Button icon='pi pi-refresh' onClick={()=>setVisibleUS(true)}/>
      <Dialog header="מקצוע" visible={visibleUS} style={{ width: '50vw' }} onHide={() => setVisibleUS(false)} footer={footerContentUS}>
                <input type={"text"} id="subject"className="m-0" placeholder="תאור"></input>
                <input type={"text"} id="mark"className="m-0" placeholder="ציון עובר"></input>
            </Dialog>
      <Dropdown
        disabled={flagClass}
        value={selectedSubject}
        onChange={(e) => {
          setSelectedSubject(e.value);
          setflagSubject(false);
             setflagSubsubject(true);
            setflagLevel(true);
            setSelectedSubsubject(null)
            setSelectedlevel(null)
        }}
        options={arrsubjects}
        optionLabel="description"
        placeholder="בחר מקצוע"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      /><br></br>
       <Button     icon="pi pi-plus" onClick={() => setVisibless(true)} />
  
      <Dialog header="נושא" visible={visibless} style={{ width: '50vw' }} onHide={() => setVisibless(false)} footer={footerContentSubsub}>
                <input type={"text"} id="subsubject"className="m-0" placeholder="תאור"></input>
      </Dialog>

      <Button icon='pi pi-trash' onClick={()=>setVisiblecdss(true)}></Button>
      <Dialog visible={visiblecdss} style={{ width: '20vw' }} onHide={() => setVisiblecdss(false)} footer={footerContentcdss}>
                {/* <input type={"text"} id="class"className="m-0"></input> */}
      </Dialog>

      <Button icon='pi pi-refresh' onClick={()=>setVisibleUss(true)}/>
      <Dialog header="נושא" visible={visibleUss} style={{ width: '50vw' }} onHide={() => setVisibleUss(false)} footer={footerContentUss}>
                <input type={"text"} id="subsubjectU"className="m-0"></input>
            </Dialog>
    
      <Dropdown
        disabled={flagSubject}
        value={selectedSubsubject}
        onChange={(e) => {
          setSelectedSubsubject(e.value);
          setflagSubsubject(false);

          setflagLevel(true);
          setSelectedlevel(null)
        }}
        options={arrsubsubjects}
        optionLabel="description"
        placeholder="בחר נושא"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%",width:"15%" }}
        /><br></br>
        <Button icon="pi pi-plus" onClick={() => setVisiblel(true)} />
   
        <Dialog header="רמה" visible={visiblel} style={{ width: '50vw' }} onHide={() => setVisiblel(false)} footer={footerContentLevel}>
                <input type={"text"} id="level"className="m-0" placeholder="תאור"></input>
        </Dialog>
 
       <Button icon='pi pi-trash' onClick={()=>setVisiblecdll(true)}></Button>
       <Dialog visible={visiblecdll} style={{ width: '20vw' }} onHide={() => setVisiblecdll(false)} footer={footerContentcdll}>
                 {/* <input type={"text"} id="class"className="m-0"></input> */}
       </Dialog>
 
       <Button icon='pi pi-refresh' onClick={()=>setVisibleUll(true)}/>
        <Dialog header="רמה" visible={visibleUll} style={{ width: '50vw' }} onHide={() => setVisibleUll(false)} footer={footerContentUll}>
                 <input type={"text"} id="level"className="m-0"></input>
        </Dialog>
      <Dropdown
        disabled={flagSubsubject}
        value={selectedlevel}
        onChange={(e) => {
          setSelectedlevel(e.value);
          setflagLevel(true);

//setflagLevel(true);
        
          //setSelectedlevel(null)
          idlevel = e.value.idlevel;
        }}
        options={arrlevels}
        optionLabel="description"
        placeholder="בחר רמה"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      />
                {/* <div className="card flex justify-content-center" style={{marginBottom:"9px"}}>
            <Button label="הוסף רמה" icon="pi pi-plus" onClick={() => setVisiblel(true)} />
            <Dialog header="רמה" visible={visiblel} style={{ width: '50vw' }} onHide={() => setVisiblel(false)} footer={footerContentLevel}>
                <input type={"text"} id="level"className="m-0" placeholder="תאור"></input>
            </Dialog>
        </div> */}
        <br></br>        <br></br>
        <br></br>


      {flag && selectedlevel!==null&&<UpdateMaterial material={mat} idlevel={selectedlevel.idlevel} subsubject={selectedSubsubject.description}></UpdateMaterial>}
      {flag && selectedlevel!==null&&<GetPageQ manager={true} idlevelorsubject={selectedlevel.idlevel} type={1}></GetPageQ>}

    {/* {flagLevel && <GetPageQ idlevelorsubject={selectedlevel.idlevel} type={1}></GetPageQ>} */}
    {/* {flagLevel && <button onClick={()=> {return navigate("/Quiz",{idlevelorsubject: selectedlevel.idlevel,idsub:selectedSubject.idsubject,leveldescription:selectedlevel.description})}}>למעבר לבוחן</button>} */}

      </div>
  );
      }