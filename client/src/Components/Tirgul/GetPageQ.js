import TirgulQ from "./TirgulQ";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import React, { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";

import { useDataFunctions } from "../../Hooks/useDataFunctions";

export default function GetPageQ(props) {
  // var dataAnswer = [];
  // var data = [];
  let manager;
  props.manager ? manager = true : manager = false
  const [dataAnswer, setdataAnswer] = useState([]);
  const [data, setdata] = useState([]);
let idlevel,idsubject;
  if(props.type==1||props.type==3){
         idlevel=props.idlevelorsubject;
         idsubject=1;
         ///////////////////////////////////////////////////////////////todo
    }
    else{
      idsubject=props.idlevelorsubject;
      idlevel=1;
               ///////////////////////////////////////////////////////////////todo

    }

  console.log("props.idlevel", props.idlevelorsubject);
  const { getDataFunc ,deleteDataFunc,postDataFunc} = useDataFunctions();
  // const [flag, setflag] = useState(false);
  // const {
  //   data: data,
  //   error,
  //   loading,
  //   refetch,
  // } = useGetData(`http://localhost:8000/question/1/${props.idlevel}`);
  // useEffect(()=>{console.log("flag",flag)},flag)
  useEffect(() => {
    let arr = []
    getDataFunc(`http://localhost:8000/question/${props.type}/${props.idlevelorsubject}`).then(
      (data1) => {
        setdata(data1);
        data1.forEach((element) => {
          const idquestion = element.idquestion;
          getDataFunc(
            `http://localhost:8000/answer/byidquestion/${idquestion}`
          ).then((data2) => {
            // dataAnswer.push(data2);

            arr.push(data2)
            console.log({ data2 })
            setdataAnswer(arr)
            console.log({ dataAnswer })
          });
        });
        console.log("dataAnswer", dataAnswer)
        // setflag(true);
        // console.log("ffffffff", flag);
      }
    );
  }, [])

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

////////////////question add
const [visible, setVisible] = useState(false);
const footerContent = (
  <div> 
      <Button label="הוסף" icon="pi pi-check" onClick={(e) =>add(e)} autoFocus />
  </div>
);

function add(e){
  setVisible(false);
  const q=document.getElementById("question").value;
  const ans1=document.getElementById("ans1").value;
  const ans2=document.getElementById("ans2").value;
  const ans3=document.getElementById("ans3").value;
  const score=document.getElementById("score").value;
  let d=[]
  postDataFunc(("http://localhost:8000/question"),{description:q,idlevel:idlevel,idsubject:idsubject,idquestion_type:props.type,score:score})
   .then((dataa)=>{
      console.log("qqqqqqqqqqqqqq",dataa)
      postDataFunc(("http://localhost:8000/answer"),{description:ans1,idquestion:dataa.idquestion})
      .then((data1)=>{
         console.log(data1)
         console.log("aaaaaaaaaaaaaaaaaaaaaagggggggg",d)

         d.push(data1)
      }) 

      postDataFunc(("http://localhost:8000/answer"),{description:ans2,idquestion:dataa.idquestion})
      .then((data2)=>{
         console.log(data)
         d.push(data2)
        }) 
      postDataFunc(("http://localhost:8000/answer"),{description:ans3,idquestion:dataa.idquestion})
      .then((data3)=>{
         console.log(data)
         d.push(data3)

         console.log("aaaaaaaaaaaaaaaaaaaaaa",d)

         data.push(dataa)
         setdata([...data])
         dataAnswer.push(d)
         setdataAnswer([...dataAnswer])    

  
            }) 
    

   }
   )  
   

   
  }

//////////////////question delete
const [visibleQD, setVisibleQD] = useState(false);
const footerContentQD = (
  <div>
    {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button label="מחק" icon="pi pi-check" onClick={(e) =>deleteFuncll(e)} autoFocus />
  </div>
);
function deleteFuncll(e){
  setVisibleQD(false);
    const questNum=document.getElementById("num").value;
    deleteDataFunc((`/question/${questNum}`))
     .then((data)=>{
        console.log(data)
        dataAnswer.splice(questNum-1,1)
        setdataAnswer([...dataAnswer])
     })  
}

  return (

    <div style={{ margin: "3%", textAlign: "right" }}>
      
      {manager && <div>
        <Button    label=" הוסף שאלה "  icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="שאלה" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <input type={"label"} className="m-0" value={"הכנס שאלה"}></input>
                <input type={"text"} id="question"className="m-0"></input>
                <input type={"label"} className="m-0" value={"הכנס תשובה 1"}></input>
                <input type={"text"} id="ans1"className="m-0"></input>
                <input type={"label"} className="m-0" value={"הכנס תשובה 2"}></input>
                <input type={"text"} id="ans2"className="m-0"></input>
                <input type={"label"} className="m-0" value={"הכנס תשובה 3"}></input>
                <input type={"text"} id="ans3"className="m-0"></input>
                <input type={"label"} className="m-0" value={"ניקוד"}></input>
                <input type={"text"} id="score"className="m-0"></input>
            </Dialog>
          &nbsp;
        <Button  label=" מחק שאלה " icon='pi pi-trash' onClick={() => setVisibleQD(true)}></Button>
        <Dialog visible={visibleQD} style={{ width: '20vw' }} onHide={() => setVisibleQD(false)} footer={footerContentQD}>
          <input type={"label"} className="m-0" value={"הקלד את מספר השאלה למחיקה"}></input>
          <input type={"text"}  id="num"></input>
        </Dialog>
        </div>}

        {dataAnswer.length > 0 && dataAnswer.map((val, i) => {
          // console.log("dataAnswer in return", dataAnswer)
          // console.log("data in return", data)
          // console.log("111111", data[val - 1]);
          // console.log("2222222", dataAnswer[val-1]);
          // console.log("333", val);
          return (
            (
              <TirgulQ
                // key={val}
                num={i + 1}
                quest={data[i]}
                categories={val}
              ></TirgulQ>
            )
            // <h1>gftgh</h1>
          );
        })}
      </div>
  );
}
