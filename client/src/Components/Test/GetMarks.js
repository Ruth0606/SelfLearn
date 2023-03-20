import React, { useEffect } from "react";
import {useDataFunctions} from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'


export default function GetMarks() {
const {getDataFunc}= useDataFunctions();

// const {
//     data,
//     error,
//     loading,
//     refetch,
//   } = useGetData(`http://localhost:8000/question/test/byStudent?idstudent=1`);

//  useEffect(()=>{  console.log(data)},[data])

useEffect(()=>{
     getDataFunc(`http://localhost:8000/question/test/getLevelTestsByIdStudent?idstudent=1`)
    .then(
        (data) => {
            console.log("data")
            console.log({data});
        }
      );
},[]);

// useEffect(() => {
//     if (selectedSubject != null) {
//       const idsubject = selectedSubject.idsubject;
//       getDataFunc(`http://localhost:8000/data/subsubject/${idsubject}`).then(
//         (data) => {
         
//           setArrsubsubjects (data) ;
//          // console.log("setArrsubsubjects", arrsubsubjects);
//         }
//       );
//     }
//   }, [selectedSubject]);

return (
    <div>
    <h1>ציונים</h1>
   <button onClick={()=>{
   
   }}>ציון ע"פ תלמיד</button>
    </div>
    )
}