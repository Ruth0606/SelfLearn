import React, { useEffect, useState,useContext } from "react";
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'
import UserContext from "../user/UserContext";

import "../styles/Test.css"


export default function GetMarks(props) {
    const [data, setData] = useState([]);
    const [dataQ, setDataQ] = useState([]);
    const { getDataFunc } = useDataFunctions();

    function compareFunction1(a,b){
      
        return b["subject.idsubject"]-a["subject.idsubject"]
  }

    function compareFunction(a,b){
          return b["level.subsubject.subject.idsubject"]-a["level.subsubject.subject.idsubject"]
    }

    const user=JSON.parse(localStorage.getItem('user'))
    const idstudent=user.idstudent

    useEffect(() => {
                getDataFunc(`question/test/getSubjectsTestsByIdStudent?idstudent=${idstudent}`)
                    .then((data1) => {
                        data1=data1.sort(compareFunction1)
                        setData(data1)
                    })
                },[])
    useEffect(() => {
                getDataFunc(`question/test/getLevelTestsByIdStudent?idstudent=${idstudent}`)
                    .then((data1) => {
                        data1=data1.sort(compareFunction)
                        console.log(data1);
                        setDataQ(data1)
                    })
                },[])           

                const s="subject.description"
     return (
       <>
     {data[0]!=null&&<>
    <h1 className="title">ציונים</h1>

    <h2>המבחנים שלי</h2>
        { data.map((el)=>{return <div>מבחן ב{el[s]}, ציונך : {el["mark"]}</div>})}
        <br></br>
</>}
{dataQ.length!=0&&<><h2>הבחנים שלי</h2>
        { dataQ.map((el)=>{return <div> בוחן ב{el["level.subsubject.subject.description"]} - {el["level.subsubject.description"]} - רמה {el["level.description"]}, ציונך : {el["mark"]}</div>})}</>}
    
    {data[0]==null&&dataQ.length==0&&<h1>אין לך עדין ציונים, התחל להבחן!!!</h1>}
        </>
     )           
}


// import React, { useEffect, useState } from "react";
// import { useDataFunctions } from '../../Hooks/useDataFunctions'
// import useGetData from '../../Hooks/useGetData'


// export default function GetMarks() {
//     const [data, setData] = useState([]);
//     const [data1, setData1] = useState([]);
//     const [flag, setFlag] = useState(true);
//     const[marks,setMarks]=useState([]);
//     const { getDataFunc } = useDataFunctions();

//     useEffect(()=>{console.log('data',data)},[data]);
//     // useEffect(()=>{console.log('data1',data1)},[data1]);
//     // useEffect(()=>{console.log('flag',flag)},[flag]);

//     useEffect(() => {
//         // getDataFunc(`question/test/getSubjectsTestsByIdStudent?idstudent=1`)
//         //     .then(
//         //         (data1) => {
//         //             // console.log("data")
//         //             setData1(data1);
//         //             // console.log({data1});
//         //             const test1 = [...data1].sort((a1, b1) => 
//         //                 // console.log(a1);
//         //                 a1.subject.idsubject - b1.subject.idsubject
//         //             );
//         //             console.log({ test1 })
//         //         }
//         //     );
//         getDataFunc(`question/test/getLevelTestsByIdStudent?idstudent=1`)
//             .then(
//                 (data) => {
//                     // console.log("data")
//                     const x="level.subsubject.subject.idsubject"
//                     // console.log({data});
//                     // console.log("/////////////////")
//                     // console.log(datayt[0][x]+"chavi")
//                     // console.log("/////////////////")
//                     // const test2 = [...data].sort(
//                     //     (a2, b2) => 
//                         // a2.level.subsubject.subject.idsubject- b2.level.subsubject.subject.idsubject);
//                     // console.log({ test2 })
//                     const numAscending = [...data].sort((a, b) => a[x] - b[x]);
//                     console.log(numAscending)
//                     setData(numAscending);

//                 }
//             );


//     }, []);

//     // useEffect(() => {
//     //     if (selectedSubject != null) {
//     //       const idsubject = selectedSubject.idsubject;
//     //       getDataFunc(`data/subsubject/${idsubject}`).then(
//     //         (data) => {

//     //           setArrsubsubjects (data) ;
//     //          // console.log("setArrsubsubjects", arrsubsubjects);
//     //         }
//     //       );
//     //     }
//     //   }, [selectedSubject]);
//     const a="level.subsubject.subject.description";
//     const b="level.subsubject.subject.idsubject";
//     const c="level.subsubject.description";
//     return (
//         <div>
//             <h1>ציונים</h1>
//             {data&&
//              data.map((item,i)=>{
//                 const mm=[...marks].push(item.mark);
//                 setMarks(mm);
//                  <p>{mm}</p>  
//             })

//         }   
                                                    
//     {/* <button onClick={() => {
//     // const t = [1, 2, 1, 3, 4, 1].sort((a, b) => a - b);
//     // console.log({ t })
//     }}>ציון ע"פ תלמיד</button> */}
//         </div>
      
//     )
// }


