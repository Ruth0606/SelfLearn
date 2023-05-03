import TirgulQ from "./TirgulQ";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import React, { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";
import Check from "../test/Check";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import {useNavigate} from "react-router-dom"
import { HiOutlineCursorArrowRays } from "react-icons/hi2";

export default function GetPageQ(props) {
 
  let manager;
  props.manager ? (manager = true) : (manager = false);
  const [data, setdata] = useState([]);
  const [cor, setcor] = useState([]);
  const [flag,setFlag]=useState("none");
  const [check,setCheck]=useState(['x','x','x','x','x','x','x','x','x','x']);
  const [f, setF] = useState(false);
  const [mark, setMark] = useState(0);

  const navigate = useNavigate();


  const [selected, setSelected] = useState([null,null,null,null,null,null,null,null,null,null]);

  let idlevel, idsubject;
  if (props.type == 1 || props.type == 3) {
    idlevel = props.idlevelorsubject;
    idsubject = 1;
    ///////////////////////////////////////////////////////////////todo
  } else {
    idsubject = props.idlevelorsubject;
    idlevel = 1;
    ///////////////////////////////////////////////////////////////todo
  }

  const { getDataFunc, deleteDataFunc, postDataFunc } = useDataFunctions();

  const correctAns=[];

  useEffect(() => {
    getDataFunc(
      `http://localhost:8000/question/${props.type}/${props.idlevelorsubject}`
    ).then((data1) => {
      console.log({data1});
      if(data1.length>10&&(props.type==2||props.type==3))
            data1.splice(10)
      if (props.type!=1){
        const correctAns=[];
        console.log({data1});

        data1.forEach((el)=>{
         const idQ=el.idquestion
         console.log({idQ});
          getDataFunc(
            `http://localhost:8000/answer/${idQ}`
          ).then((dataa) => {
           correctAns.push(dataa);
           console.log({dataa});
           console.log("cccccccccccccccccccccc",correctAns);
           setcor([...correctAns])

          });
        })
    }
    setdata(data1);

    });
  }, []);


 
  

  useEffect(()=>{
    let m=0;
    console.log(flag);
    if(flag==="block"){
      console.log(cor);
      console.log({selected});

      selected.forEach((el,i)=>{
        if(el!==null&&el.idanswer===cor[i]["Answer.id"] ){
          m+=data[i].score;
          check[i]='v'
        }
      })
      setMark(m);
      //setFlag("none");
      // setCheck([['x','x','x','x','x','x','x','x','x','x']])
      const idstudent=JSON.parse(localStorage.getItem('user')).idstudent
      const idquestion_type=props.type
      const mark=m;
      postDataFunc(("http://localhost:8000/question/test"), {idstudent,mark,idquestion_type,idlevel,idsubject})
      .then((data) => {
        console.log(data)
        setF(true);
      })

    }
  },[flag])


  ////////////////question add
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button
        label="הוסף"
        icon="pi pi-check"
        onClick={(e) => add(e)}
        autoFocus
      />
    </div>
  );

  function add(e) {
    setVisible(false);
    const q = document.getElementById("question").value;
    const ans1 = document.getElementById("ans1").value;
    const ans2 = document.getElementById("ans2").value;
    const ans3 = document.getElementById("ans3").value;
    const score = document.getElementById("score").value;
    const correctAns = document.getElementById("correctAns").value;

    let d = [];
    postDataFunc("http://localhost:8000/question", {
      description: q,
      idlevel: idlevel,
      idsubject: idsubject,
      idquestion_type: props.type,
      score: score,
    }).then((dataa) => {
      console.log("qqqqqqqqqqqqqq", dataa);
      postDataFunc("http://localhost:8000/answer", {
        description: ans1,
        idquestion: dataa.idquestion,
      }).then((data1) => {
        console.log(data1);
        console.log("aaaaaaaaaaaaaaaaaaaaaagggggggg", d);
        if(correctAns==="1"){
          postDataFunc("http://localhost:8000/answer/correctanswer", {
            idquestion: dataa.idquestion,
            idanswer:data1.idanswer
          }).then((data1) => {})
        }
        d.push(data1);
      });
      postDataFunc("http://localhost:8000/answer", {
        description: ans2,
        idquestion: dataa.idquestion,
      }).then((data2) => {
        console.log(correctAns);
        if(correctAns==="2"){
          postDataFunc("http://localhost:8000/answer/correctanswer", {
            idquestion: dataa.idquestion,
            idanswer:data2.idanswer
          }).then((data) => {console.log(data);})
        }
        d.push(data2);
        
      });
      postDataFunc("http://localhost:8000/answer", {
        description: ans3,
        idquestion: dataa.idquestion,
      }).then((data3) => {
        console.log(data);
        if(correctAns==="3"){
          postDataFunc("http://localhost:8000/answer/correctanswer", {
            idquestion: dataa.idquestion,
            idanswer:data3.idanswer
          }).then((data1) => {})
        }
        d.push(data3);
        console.log("aaaaaaaaaaaaaaaaaaaaaa", d);
        dataa.answers = d
        console.log({ dataa });

        data.push(dataa);
        setdata([...data]);
        // dataAnswer.push(d);
        // setdataAnswer([...dataAnswer]);
      });
    });
  }

  //////////////////question delete
  const [visibleQD, setVisibleQD] = useState(false);
  const footerContentQD = (
    <div>
      {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
      <Button
        label="מחק"
        icon="pi pi-check"
        onClick={(e) => deleteFuncll(e)}
        autoFocus
      />
    </div>
  );
  function deleteFuncll(e) {
    setVisibleQD(false);
    const questNum = document.getElementById("num").value;
    const num = data[questNum - 1].idquestion
    deleteDataFunc(`question/${num}`).then((data1) => {
      console.log(data);
      data.splice(questNum - 1, 1);
      setdata([...data]);

      // dataAnswer.splice(questNum - 1, 1);
      // setdataAnswer([...dataAnswer]);
    });
  }

  function func(ind,selected1)
  {

    selected[ind]=selected1;
   // setSelected([...selected]);
  }

  function func2(ind)
  {
    if(cor[ind]){
    console.log(cor[ind]);
    console.log(cor);
    return cor[ind]["Answer.id"];
  }
  }

  return (
    <div style={{ margin: "3%", textAlign: "right" }}>
      {/* {f&&<><Check arr={check}></Check></>} */}
      {manager && (
             <div  className="card-container blue-container flex align-items-center justify-content-start"  style={{ marginRight: "6%",marginBottom:"5%" }} >

          <Button
            label=" הוסף שאלה "
            icon="pi pi-plus"
            onClick={() => setVisible(true)}
            className="flex align-items-center justify-content-center font-bold text-white border-round m-2" 
            style={{minWidth: "100px", minHeight: "50px" }}
          />
          {/* <Dialog
            header="שאלה"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
          >
            <input type={"label"} className="m-0" value={"הכנס שאלה"}></input>
            <input type={"text"} id="question" className="m-0"></input>
            <input
              type={"label"}
              className="m-0"
              value={"הכנס תשובה 1"}
            ></input>
            <input type={"text"} id="ans1" className="m-0"></input>
            <input
              type={"label"}
              className="m-0"
              value={"הכנס תשובה 2"}
            ></input>
            <input type={"text"} id="ans2" className="m-0"></input>
            <input
              type={"label"}
              className="m-0"
              value={"הכנס תשובה 3"}
            ></input>
            <input type={"text"} id="ans3" className="m-0"></input>
            <input type={"label"} className="m-0" value={"ניקוד"}></input>
            <input type={"text"} id="score" className="m-0"></input>

            <input type={"label"} className="m-0" value={"תשובה נכונה"}></input>
            <input type={"text"} id="correctAns" className="m-0"></input>
          </Dialog> */}


<Dialog className="h-40rem w-5 text-center"
            header=""
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
          >
            <div className="text-5xl mt-0 mb-5 font-semibold">שאלה</div>
            <div className="m-0 mr-0 ml-0 mt-2">
              <div className="flex flex-column mx-8">
                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="question" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>הכנס שאלה</label>

                </div>
      
                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="ans1" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>הכנס תשובה 1</label>

                </div>


                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="ans2" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>הכנס תשובה 2</label>
                </div>
                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="ans3" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>הכנס תשובה 3</label>
                </div>
                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="score" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>ניקוד</label>
                </div>
                {/* <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="correctAns" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>מספר תשובה נכונה</label>
                </div> */}
                <div className="flex flex-column md:flex-row rtl m-2">
                  <input type={"text"} id="correctAns" className="w-8 h-2rem"></input>
                  <label className="m-2" style={{ direction: "rtl" }}>מספר תשובה נכונה</label>
                </div>

              </div>
            </div>
          </Dialog>




          &nbsp;
          <Button
            className="flex align-items-center justify-content-center font-bold text-white border-round m-2" 
            style={{minWidth: "100px", minHeight: "50px" }}
            label=" מחק שאלה "
            icon="pi pi-trash"
            onClick={() => setVisibleQD(true)}
          ></Button>
          
          <Dialog
            visible={visibleQD}
            style={{ width: "20vw" }}
            onHide={() => setVisibleQD(false)}
            footer={footerContentQD}
          >
            <input
              type={"label"}
              className="m-0"
              value={"הקלד את מספר השאלה למחיקה"}
            ></input>
            <input type={"text"} id="num"></input>
          </Dialog>
          
        </div>
      )}
      {    console.log({selected})
}
      {/* {props.flag=="block"&&<div>
      {cor.length > 0 &&
        data.map((q, index) => (
          <TirgulQ

            correctAns={correctAns[index]["Answer.id"]}
            flag={props.flag}
            func={func}
            key={index}
            num={index + 1}
            quest={q}
            categories={q.answers}
          />
        ))}
        
</div>} */}
{//props.flag=="none"&&
}
{props.type!=1&&f&&<h1 className="mark">ציונך : {mark}</h1>}
{!manager&&<div className="text-2xl"><HiOutlineCursorArrowRays className=""/> בכל שאלה בחר את התשובה הנכונה </div>
}{<div>
      {data.length > 0 &&
        data.map((q, index) => (
          <TirgulQ
          check={check[index]}
         
            flag={flag}
            func={func}
            func2={func2}

            key={index}
            num={index + 1}
            quest={q}
            categories={q.answers}
          />
        ))}
        
</div>}
{
             !manager&&props.type==3&& <div style={{margin:"3px"}}className="card flex justify-content-center">
                     <Button label="הגש בוחן" onClick={()=>{setFlag("block");  }} />
              </div>
            }
{
            !manager&& props.type==2&& <div style={{margin:"3px"}}className="card flex justify-content-center">
                     <Button label="הגש מבחן" onClick={()=>{setFlag("block");}} />
              </div>
            }

      {/* {dataAnswer.length > 0 &&
        dataAnswer.map((val, i) => {
          // console.log("dataAnswer in return", dataAnswer)
          // console.log("data in return", data)
          // console.log("111111", data[val - 1]);
          // console.log("2222222", dataAnswer[val-1]);
          // console.log("333", val);
          return (
            <TirgulQ
              // key={val}
              num={i + 1}
              quest={data[i]}
              categories={val}
            ></TirgulQ>
            // <h1>gftgh</h1>
          );
        })} */}
    </div>
  );
}













// import TirgulQ from "./TirgulQ";
// import { Button } from "primereact/button";
// import { Dialog } from "primereact/dialog";

// import React, { useEffect, useState } from "react";
// import useGetData from "../../Hooks/useGetData";
// import Check from "../test/Check";
// import { useDataFunctions } from "../../Hooks/useDataFunctions";
// import { useNavigate } from "react-router-dom"

// export default function GetPageQ(props) {
//   // var dataAnswer = [];
//   // var data = [];
//   let manager;
//   props.manager ? (manager = true) : (manager = false);
//   // const [dataAnswer, setdataAnswer] = useState([]);
//   const [data, setdata] = useState([]);
//   const [cor, setcor] = useState([]);
//   const [flag, setFlag] = useState("none");
//   const [check, setCheck] = useState(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']);
//   const [f, setF] = useState(false);
//   const [mark, setMark] = useState(0);

//   const navigate = useNavigate();


//   // const arr1=[null,null,null,null,null,null,null,null,null,null]
//   const [selected, setSelected] = useState([null, null, null, null, null, null, null, null, null, null]);

//   let idlevel, idsubject;
//   if (props.type == 1 || props.type == 3) {
//     idlevel = props.idlevelorsubject;
//     idsubject = 1;
//     ///////////////////////////////////////////////////////////////todo
//   } else {
//     idsubject = props.idlevelorsubject;
//     idlevel = 1;
//     ///////////////////////////////////////////////////////////////todo
//   }

//   const { getDataFunc, deleteDataFunc, postDataFunc } = useDataFunctions();
//   // const [flag, setflag] = useState(false);
//   // const {
//   //   data: data,
//   //   error,
//   //   loading,
//   //   refetch,
//   // } = useGetData(`http://localhost:8000/question/1/${props.idlevel}`);
//   // useEffect(()=>{console.log("flag",flag)},flag)
//   const correctAns = [];

//   useEffect(() => {
//     getDataFunc(
//       `http://localhost:8000/question/${props.type}/${props.idlevelorsubject}`
//     ).then((data1) => {
//       console.log({ data1 });
//       if (data1.length > 10 && (props.type == 2 || props.type == 3))
//         data1.splice(10)
//       if (props.type != 1) {
//         const correctAns = [];
//         console.log({ data1 });

//         data1.forEach((el) => {
//           const idQ = el.idquestion
//           console.log({ idQ });
//           getDataFunc(
//             `http://localhost:8000/answer/${idQ}`
//           ).then((dataa) => {
//             correctAns.push(dataa);
//             console.log({ dataa });
//             console.log("cccccccccccccccccccccc", correctAns);
//             setcor([...correctAns])

//           });
//         })
//       }
//       setdata(data1);
//       // data1.forEach((element)  => {
//       //   const arr=[]
//       //   const idquestion = element.idquestion;
//       //   getDataFunc(
//       //     `http://localhost:8000/answer/byidquestion/${idquestion}`
//       //   ).then((data2) => {
//       //     // dataAnswer.push(data2);

//       //     arr.push(data2)
//       //     console.log({ data2 })

//       //     setdataAnswer(arr)
//       //     console.log("dataAnswer", dataAnswer)

//       //     console.log({ dataAnswer })
//       //   });

//       // });
//       // setdata(data1);

//       // // setflag(true);
//       // // console.log("ffffffff", flag);
//     });
//   }, []);





//   useEffect(() => {
//     let m = 0;
//     console.log(flag);
//     if (flag === "block") {
//       console.log(cor);
//       console.log({ selected });

//       selected.forEach((el, i) => {
//         if (el !== null && el.idanswer === cor[i]["Answer.id"]) {
//           m += data[i].score;
//           check[i] = 'v'
//         }
//       })
//       setMark(m);
//       //setFlag("none");
//       // setCheck([['x','x','x','x','x','x','x','x','x','x']])
//       const idstudent = JSON.parse(localStorage.getItem('user')).idstudent
//       const idquestion_type = props.type
//       const mark = m;
//       postDataFunc(("http://localhost:8000/question/test"), { idstudent, mark, idquestion_type, idlevel, idsubject })
//         .then((data) => {
//           console.log(data)
//           setF(true);
//           //setMark(0);
//         })

//     }
//   }, [flag])
//   //   useEffect(() => {
//   //     if (data&&props.type==3){
//   //       data.forEach((el)=>{
//   //        const idQ=el.idquestion
//   //        console.log({idQ});
//   //         getDataFunc(
//   //           `http://localhost:8000/answer/${idQ}`
//   //         ).then((data1) => {
//   //          correctAns.push(data1);
//   //         });
//   //       })
//   //  console.log({correctAns});
//   //   }
//   //   }, [data]);

//   // useEffect(() => {

//   //   if (data[0] != null) {
//   //     console.log("questions", data);
//   //     setf(true);
//   //     console.log("fff", f);

//   //     data.forEach((element) => {
//   //       const idquestion = element.idquestion;
//   //       getDataFunc(
//   //         `http://localhost:8000/answer/byidquestion/${idquestion}`
//   //       ).then((data) => {
//   //         console.log("answers", data);
//   //         dataAnswer = data;
//   //       console.log("dataAnswer",dataAnswer)
//   //       });
//   //     });
//   //   }
//   // }, [data]);

//   ////////////////question add
//   const [visible, setVisible] = useState(false);
//   const footerContent = (
//     <div>
//       <Button
//         label="הוסף"
//         icon="pi pi-check"
//         onClick={(e) => add(e)}
//         autoFocus
//       />
//     </div>
//   );

//   function add(e) {
//     setVisible(false);
//     const q = document.getElementById("question").value;
//     const ans1 = document.getElementById("ans1").value;
//     const ans2 = document.getElementById("ans2").value;
//     const ans3 = document.getElementById("ans3").value;
//     const score = document.getElementById("score").value;
//     const correctAns = document.getElementById("correctAns").value;

//     let d = [];
//     postDataFunc("http://localhost:8000/question", {
//       description: q,
//       idlevel: idlevel,
//       idsubject: idsubject,
//       idquestion_type: props.type,
//       score: score,
//     }).then((dataa) => {
//       console.log("qqqqqqqqqqqqqq", dataa);
//       postDataFunc("http://localhost:8000/answer", {
//         description: ans1,
//         idquestion: dataa.idquestion,
//       }).then((data1) => {
//         console.log(data1);
//         console.log("aaaaaaaaaaaaaaaaaaaaaagggggggg", d);
//         if (correctAns === "1") {
//           postDataFunc("http://localhost:8000/answer/correctanswer", {
//             idquestion: dataa.idquestion,
//             idanswer: data1.idanswer
//           }).then((data1) => { })
//         }
//         d.push(data1);
//       });
//       postDataFunc("http://localhost:8000/answer", {
//         description: ans2,
//         idquestion: dataa.idquestion,
//       }).then((data2) => {
//         console.log(correctAns);
//         if (correctAns === "2") {
//           postDataFunc("http://localhost:8000/answer/correctanswer", {
//             idquestion: dataa.idquestion,
//             idanswer: data2.idanswer
//           }).then((data) => { console.log(data); })
//         }
//         d.push(data2);

//       });
//       postDataFunc("http://localhost:8000/answer", {
//         description: ans3,
//         idquestion: dataa.idquestion,
//       }).then((data3) => {
//         console.log(data);
//         if (correctAns === "3") {
//           postDataFunc("http://localhost:8000/answer/correctanswer", {
//             idquestion: dataa.idquestion,
//             idanswer: data3.idanswer
//           }).then((data1) => { })
//         }
//         d.push(data3);
//         console.log("aaaaaaaaaaaaaaaaaaaaaa", d);
//         dataa.answers = d
//         console.log({ dataa });

//         data.push(dataa);
//         setdata([...data]);
//         // dataAnswer.push(d);
//         // setdataAnswer([...dataAnswer]);
//       });
//     });
//   }

//   //////////////////question delete
//   const [visibleQD, setVisibleQD] = useState(false);
//   const footerContentQD = (
//     <div>
//       {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
//       <Button
//         label="מחק"
//         icon="pi pi-check"
//         onClick={(e) => deleteFuncll(e)}
//         autoFocus
//       />
//     </div>
//   );
//   function deleteFuncll(e) {
//     setVisibleQD(false);
//     const questNum = document.getElementById("num").value;
//     const num = data[questNum - 1].idquestion
//     deleteDataFunc(`question/${num}`).then((data1) => {
//       console.log(data);
//       data.splice(questNum - 1, 1);
//       setdata([...data]);

//       // dataAnswer.splice(questNum - 1, 1);
//       // setdataAnswer([...dataAnswer]);
//     });
//   }

//   function func(ind, selected1) {

//     selected[ind] = selected1;
//     // setSelected([...selected]);
//   }

//   function func2(ind) {
//     if (cor[ind]) {
//       console.log(cor[ind]);
//       console.log(cor);
//       return cor[ind]["Answer.id"];
//     }
//   }

//   return (
//     <div style={{ margin: "3%", textAlign: "right" }}>
//       {/* {f&&<><Check arr={check}></Check></>} */}
//       {manager && (
//         <div className="card-container blue-container flex align-items-center justify-content-start" style={{ marginRight: "6%", marginBottom: "5%" }} >

//           <Button
//             label=" הוסף שאלה "
//             icon="pi pi-plus"
//             onClick={() => setVisible(true)}
//             className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
//             style={{ minWidth: "100px", minHeight: "50px" }}
//           />





//           <Dialog className="h-40rem w-5 text-center"
//             header=""
//             visible={visible}
//             style={{ width: "50vw" }}
//             onHide={() => setVisible(false)}
//             footer={footerContent}
//           >
//             <div className="text-5xl mt-0 mb-5 font-semibold">שאלה</div>
//             <div className="m-6 mt-2">
//               <div className="flex flex-column mx-8">
//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="question" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>הכנס שאלה</label>

//                 </div>
//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="ans1" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>הכנס שאלה</label>

//                 </div>
//                 {/* <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="ans1" className="mx-5 w-8 h-2rem"></input>
//                   <label className="m-0" style={{ direction: "rtl" }}>הכנס תשובה 1</label>


//                 </div> */}

//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="ans2" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>הכנס תשובה 2</label>

//                 </div>
//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="ans3" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>הכנס תשובה 3</label>
//                 </div>
//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="score" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>ניקוד</label>
//                 </div>
//                 <div className="flex flex-column md:flex-row rtl m-2">
//                   <input type={"text"} id="correctAns" className="w-8 h-2rem"></input>
//                   <label className="m-2" style={{ direction: "rtl" }}>מספר תשובה נכונה</label>
//                 </div>
//               </div>
//             </div>
//           </Dialog>
//           &nbsp;
//           <Button
//             className="flex align-items-center justify-content-center font-bold text-white border-round m-2"
//             style={{ minWidth: "100px", minHeight: "50px" }}
//             label=" מחק שאלה "
//             icon="pi pi-trash"
//             onClick={() => setVisibleQD(true)}
//           ></Button>
//           <Dialog
//             visible={visibleQD}
//             style={{ width: "20vw" }}
//             onHide={() => setVisibleQD(false)}
//             footer={footerContentQD}
//           >
//             <input
//               type={"label"}
//               className="m-0"
//               value={"הקלד את מספר השאלה למחיקה"}
//             ></input>
//             <input type={"text"} id="num"></input>
//           </Dialog>

//         </div>
//       )}
//       {console.log({ selected })
//       }
//       {/* {props.flag=="block"&&<div>
//       {cor.length > 0 &&
//         data.map((q, index) => (
//           <TirgulQ

//             correctAns={correctAns[index]["Answer.id"]}
//             flag={props.flag}
//             func={func}
//             key={index}
//             num={index + 1}
//             quest={q}
//             categories={q.answers}
//           />
//         ))}
        
// </div>} */}
//       {//props.flag=="none"&&
//       }
//       {props.type != 1 && f && <h1 className="mark">ציונך : {mark}</h1>}

//       {<div>
//         {data.length > 0 &&
//           data.map((q, index) => (
//             <TirgulQ
//               check={check[index]}

//               flag={flag}
//               func={func}
//               func2={func2}

//               key={index}
//               num={index + 1}
//               quest={q}
//               categories={q.answers}
//             />
//           ))}

//       </div>}
//       {
//         !manager && props.type == 3 && <div style={{ margin: "3px" }} className="card flex justify-content-center">
//           <Button label="הגש בוחן" onClick={() => { setFlag("block"); }} />
//         </div>
//       }
//       {
//         !manager && props.type == 2 && <div style={{ margin: "3px" }} className="card flex justify-content-center">
//           <Button label="הגש מבחן" onClick={() => { setFlag("block"); }} />
//         </div>
//       }

//       {/* {dataAnswer.length > 0 &&
//         dataAnswer.map((val, i) => {
//           // console.log("dataAnswer in return", dataAnswer)
//           // console.log("data in return", data)
//           // console.log("111111", data[val - 1]);
//           // console.log("2222222", dataAnswer[val-1]);
//           // console.log("333", val);
//           return (
//             <TirgulQ
//               // key={val}
//               num={i + 1}
//               quest={data[i]}
//               categories={val}
//             ></TirgulQ>
//             // <h1>gftgh</h1>
//           );
//         })} */}
//     </div>
//   );
// }
