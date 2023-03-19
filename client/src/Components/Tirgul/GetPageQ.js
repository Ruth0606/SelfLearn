import TirgulQ from "./TirgulQ";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import React, { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";

export default function GetPageQ(props) {
  var dataAnswer = [];
  console.log("props.idlevel", props.idlevel);
  const { getDataFunc } = useDataFunctions();
 // const [data, setdata] = useState([]);
  const [f, setf] = useState(false);
  const {
    data,
    error,
    loading,
    refetch,
  } = useGetData(`http://localhost:8000/question/1/${props.idlevel}`);
  
  // getDataFunc(`http://localhost:8000/question/1/${props.idlevel}`).then(
  //   (data) => {
  //     console.log("qu", data);
  //     setdata(data);
  //   }
  // );
  console.log("questions", data);

  useEffect(() => {
    console.log("questions", data);

    if (data != null) {
      setf(true);
      data.forEach((element) => {
        const idquestion = element.idquestion;
        getDataFunc(
          `http://localhost:8000/answer/byidquestion/${idquestion}`
        ).then((data) => {
          console.log("answers", data);
          dataAnswer = data;
        });
      });
    }
  }, [data]);

  var k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div style={{ margin: "3%", textAlign: "right" }}>
      {k.map((val) => {
        console.log("111111", data[val - 1]);
        console.log("2222222", dataAnswer[val - 1]);
        console.log("333", val);
        return (
          f && (
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
