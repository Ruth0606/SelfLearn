import React, { useEffect, useState } from "react";
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'


export default function GetMarks() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [flag, setFlag] = useState(true);
    const { getDataFunc } = useDataFunctions();

    useEffect(()=>{console.log('data',data)},[data]);
    useEffect(()=>{console.log('data1',data1)},[data1]);
    useEffect(()=>{console.log('flag',flag)},[flag]);

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
    const c="level.subsubject.description";
    return (
        <div>
            <h1>ציונים</h1>
            {data&&
            data.map((item,i)=>{
                // const s=item[a]
                return(
                    <>
                    {/* {console.log(s)} */}
                   
                    {/* {flag&& <h2>{s}</h2>} */}
                    {/* <h2>חשבון</h2> */}
                    
                {/* {item[b]!==data[i-1][b]&& */}
                {
                getDataFunc(`http://localhost:8000/question/test/getTestByIdSubject?idsubject=${item["level.subsubject.subject.idsubject"]}`)
                    .then(
                        (data1) => {
                            setData1(data1) 
                        }
                    )
                // &&
                // <><h1>מבחן סופי</h1>
                // <h2>{data1.mark}ציון</h2>
                // {setFlag(false)}
                // </>
                &&<>
                <h2>{data1}</h2>
                </>
                
                 } 
                <h1>בוחן</h1>
                {/* <h2>{item[c]}בנושא</h2> */}
                <h2>{item.mark}ציון</h2>
                <h1>{item}</h1>
                </>
                )
            })}
{/* <button onClick={() => {
// const t = [1, 2, 1, 3, 4, 1].sort((a, b) => a - b);
// console.log({ t })
}}>ציון ע"פ תלמיד</button> */}
        </div>
      
    )
}