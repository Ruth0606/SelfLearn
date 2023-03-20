import TirgulQ from "./TirgulQ";

import React, { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";

import { useDataFunctions } from "../../Hooks/useDataFunctions";

export default function GetPageQ(props) {
  // var dataAnswer = [];
  // var data = [];
  const [dataAnswer, setdataAnswer] = useState([]);
  const [data, setdata] = useState([]);

  console.log("props.idlevel", props.idlevel);
  const { getDataFunc } = useDataFunctions();
  const[flag, setflag] = useState(false);
  // const {
  //   data: data,
  //   error,
  //   loading,
  //   refetch,
  // } = useGetData(`http://localhost:8000/question/1/${props.idlevel}`);
  useEffect(()=>{console.log("flag",flag)},flag)
useEffect(()=>{
  console.log("2222222222222222222222222222222222222222222222222222222222222222222")
  getDataFunc(`http://localhost:8000/question/1/${props.idlevel}`).then(
    (data1) => {
    setdata(data1);
      data1.forEach((element) => {
        const idquestion = element.idquestion;
        getDataFunc(
          `http://localhost:8000/answer/byidquestion/${idquestion}`
        ).then((data2) => {
          //dataAnswer.push(data2);
          // let arr=dataAnswer
          // arr.push(data2)
          console.log({data2})
          setdataAnswer(dataAnswer)
          console.log({dataAnswer})
        });
      });
      console.log("dataAnswer", dataAnswer)
      setflag(true);
      console.log("ffffffff", flag);
      console.log(dataAnswer.length)
    }
  );
},[])

  // useEffect(() => {


  //   if (data[0] != null) {
  //     console.log("questions", data);
  //     setf(true);
  //     console.log("fff", f);

  //     data.forEach((element) => {
  //       const idquestion = element.idquestion;
  //       getDataFunc(
  //         `http://localhost:8000/answer/byidquestion/${idquestion}`
  //       ).then((data) => {
  //         console.log("answers", data);
  //         dataAnswer = data;
  //       console.log("dataAnswer",dataAnswer)
  //       });
  //     });
  //   }
  // }, [data]);

  var k = [1, 2]//, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    
    dataAnswer.length>0 && <div style={{ margin: "3%", textAlign: "right" }}>
      {k.map((val) => {
        console.log("dataAnswer in return", dataAnswer)
        console.log("data in return", data)
        console.log("111111", data[val - 1]);
        console.log("2222222", dataAnswer[val - 1]);
        console.log("333", val);
        return (
          flag && (
            <TirgulQ
              num={val}
              quest={data[val - 1]}
              categories={dataAnswer[val - 1]}
            ></TirgulQ>
          )
        );
      })}
    </div>
  );
}
