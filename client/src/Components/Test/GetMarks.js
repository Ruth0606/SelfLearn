import React, { useEffect, useState } from "react";
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'


export default function GetMarks() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const { getDataFunc } = useDataFunctions();

    useEffect(() => {
        // getDataFunc(`http://localhost:8000/question/test/getSubjectsTestsByIdStudent?idstudent=1`)
        //     .then(
        //         (data1) => {
        //             // console.log("data")
        //             setData1(data1);
        //             // console.log({data1});
        //             const test1 = [...data1].sort((a1, b1) => 
        //                 // console.log(a1);
        //                 a1.subject.idsubject - b1.subject.idsubject
        //             );
        //             console.log({ test1 })
        //         }
        //     );
        getDataFunc(`http://localhost:8000/question/test/getLevelTestsByIdStudent?idstudent=1`)
            .then(
                (data) => {
                    // console.log("data")
                    const x="level.subsubject.subject.idsubject"
                    // console.log({data});
                    // console.log("/////////////////")
                    // console.log(datayt[0][x]+"chavi")
                    // console.log("/////////////////")
                    // const test2 = [...data].sort(
                    //     (a2, b2) => 
                        // a2.level.subsubject.subject.idsubject- b2.level.subsubject.subject.idsubject);
                    // console.log({ test2 })
                    const numAscending = [...data].sort((a, b) => a[x] - b[x]);
                    console.log(numAscending)
                    setData(numAscending);

                }
            );


    }, []);

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
    const a="level.subsubject.subject.description";
    const b="level.subsubject.subject.idsubject";
    return (
        <div>
            {data&&
            data.map((item,i)=>{
                return(
                    <>
                <b>{item[a]}</b>
                {item[b]!==data[i-1][b]&&
                getDataFunc(`http://localhost:8000/question/test/getSubjectsTestsByIdStudent?idstudent=1`)
                    .then(
                        (data1) => {
                           
                        }
                    )

                }


                    </>
                )

            })}
            <h1>ציונים</h1>
            <button onClick={() => {
                // const t = [1, 2, 1, 3, 4, 1].sort((a, b) => a - b);
                // console.log({ t })
            }}>ציון ע"פ תלמיד</button>
        </div>
    )
}