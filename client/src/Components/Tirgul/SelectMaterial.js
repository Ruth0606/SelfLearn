import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import TirgulQ from "./TirgulQ";
import useGetData from "../../Hooks/useGetData";
import GetPageQ from "./GetPageQ";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import "../styles/Tirgul.css"
import Material from "./Material";
import Quiz from '../test/Quiz'
import {useNavigate} from "react-router-dom"
import { Button } from "primereact/button";



export default function SelectMaterial() {
  const { getDataFunc } = useDataFunctions();
  const navigate = useNavigate();
  let idlevel = null;
  const [flagClass, setflagClass] = useState(true);
  const [flagSubject, setflagSubject] = useState(true);
  const [flagSubsubject, setflagSubsubject] = useState(true);
  const [flagLevel, setflagLevel] = useState(false);


  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubsubject, setSelectedSubsubject] = useState(null);
  const [selectedlevel, setSelectedlevel] = useState(null);

  const [arrsubjects, setArrsubjects] = useState([]);
  const [arrsubsubjects, setArrsubsubjects] = useState([]);
  const [arrlevels, setArrlevels] = useState([]);


  //useEffect(()=>setf(true),[selectedlevel])

  // const classes = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  //   { name: "London", code: "LDN" },
  //   { name: "Istanbul", code: "IST" },
  //   { name: "Paris", code: "PRS" },
  // ];
  // const classes2 = [
  //   { name: "b", code: "NY" },
  //   { name: "d", code: "RM" },
  //   { name: "g", code: "LDN" },
  //   { name: "i", code: "IST" },
  //   { name: "o", code: "PRS" },
  // ];
  //let arrclasses = [];
 // let arrsubjects = [];
  const {
    data: dataClass,
    error,
    loading,
    refetch,
  } = useGetData("http://localhost:8000/data/class");

  //     useGetData("http://localhost:8000/data/class").then((data)=>{
  //     //console.log(data)
  //     data.forEach(element => {   //   console.log(element);
  //         arrclasses.push({"description":element.description,"id":element.idclass})
  //     });
  //    // arrclasses=data;
  //     console.log("arrclasses",arrclasses)
  //     });
  //     // console.log(classes2)

  useEffect(() => {
    //console.log("selectedClass", selectedClass);
    if (selectedClass != null) {
      
      // console.log("selectedClass", selectedClass);
      // console.log("dataClass", dataClass);

      //   const arr = dataClass.filter(
      //     (el) => el.description == selectedClass.description
      //   );
      //   const idclass = arr[0].idclass;
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
      //const { data: dataSubject, error,  loading,refetch,} = useGetData(`http://localhost:8000/data/subject/${idclass}`);

      // const arr=arrclasses.filter((el)=>el.description==selectedClass.description);
      // console.log(arrclasses)
      // console.log(arr)
      // const idclass=arr[0].id;
      // getDataFunc(`http://localhost:8000/data/subject/${idclass}`).then((data)=>{
      //     console.log(data)
      //     arrsubjects=data;
      //     // data.forEach(element => {
      //     //     arrsubjects.push({"description":element.description,"id":element.id})
      //     // });
      //     console.log(arrsubjects)
      //     });
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
    
    <div style={{ margin: "3%",marginRight:"15%"}}>
 <div  className="card-container blue-container flex align-items-center justify-content-start" >
        {dataClass.length && (
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

            // setflagSubsubject(true)
            // setflagSubject(true)
            // setArrsubsubjects([...arrsubsubjects])
            //console.log(e.value);
          }}
          options={dataClass}
          optionLabel="description"
          placeholder="בחר כיתה"
          className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
          style={{ marginLeft: "3%", marginRight: "3%", width: "20%",minHeight: "50px"}}
          // style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%",backgroundColor:" #f9f9f9 ",borderColor: "#4CAF50"}}
        />
      )}
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
        className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
        style={{ marginLeft: "3%", marginRight: "3%", width: "20%",minHeight: "50px"}}
        />
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
        className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
        style={{ marginLeft: "3%", marginRight: "3%", width: "20%",minHeight: "50px"}}
        />
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
        className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
        style={{ marginLeft: "3%", marginRight: "3%", width: "20%",minHeight: "50px"}}
        />

    </div>
    <div style={{marginLeft: "10rem"}} >
      {/* {console.log(flagLevel)} */}
      {flagLevel &&selectedlevel&& <Material idlevel={selectedlevel.idlevel} subsubject={selectedSubsubject.description}></Material>}
      {flagLevel && selectedlevel&&<GetPageQ idlevelorsubject={selectedlevel.idlevel} type={1} ></GetPageQ>}
      {/* {flagLevel &&<button onClick={()=><Quiz idlevelorsubject={selectedlevel.idlevel}idsub={selectedSubject.idsubject}leveldescription={selectedlevel.description}></Quiz>}>למעבר לבוחן</button>}     */}
    {/* {flagLevel && <button onClick={()=> {return navigate("/Quiz/1/3")}}>למעבר לבוחן</button>} */}
    {/* selectedlevel.idlevel */}
    {flagLevel &&selectedlevel!==null&& <Button onClick={()=> {return navigate(`/Quiz/${ selectedlevel.idlevel}/${selectedSubject.idsubject}/${selectedlevel.description}`)}}>למעבר לבוחן</Button>}
</div>
      </div>
  );
}