import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import {useNavigate} from "react-router-dom"
import SelectedMaterial from "../SelectMaterial"
import React, { useEffect, useState } from "react";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { useDataFunctions } from "../../../Hooks/useDataFunctions";
import CardDesign from "./CardDesign";
import x from "../../../img/x.png"
import v from "../../../img/v.png"

export default function AllData() {
    const [data, setData] = useState([]);
    const [filteredData,setFilteredData]= useState([]);
    const [d, setD] = useState("");
    const f = false;
    const { getDataFunc } = useDataFunctions();
    const navigate = useNavigate();

    function funcGetData() {

    }

    let before = "";
    useEffect(() => {
        // if (selectedSubject != null) {
        getDataFunc(`data/getAllData`).then(
            (data) => {
                data = data.sort((a, b) => {
                    console.log(a["subsubject.subject.class.description"] < b["subsubject.subject.class.description"]);
                    if (a["subsubject.subject.class.description"] && a["subsubject.subject.description"] && a["subsubject.description"] && a.description && b["subsubject.subject.class.description"] && b["subsubject.subject.description"] && b["subsubject.description"] && b.description) {
                        if (a["subsubject.subject.class.description"] > b["subsubject.subject.class.description"])
                            return 1;
                        else {
                            if (a["subsubject.subject.class.description"] < b["subsubject.subject.class.description"]) return -1
                            if (a["subsubject.subject.description"] > b["subsubject.subject.description"]) {
                                return 1;
                            }
                            else {
                                if (a["subsubject.subject.description"] < b["subsubject.subject.description"]) return -1;
                                if (a["subsubject.description"] > b["subsubject.description"]) {
                                    return 1;
                                }
                                else {
                                    if (a["subsubject.description"] < b["subsubject.description"]) return -1
                                    if (a["description"] > b["description"]) {
                                        return 1;
                                    }
                                }
                            }
                        }
                        return -1;
                        // console.log(a["subsubject.subject.class.idclass"]<b["subsubject.subject.class.idclass"]);
                        // if(a["subsubject.subject.class.idclass"]==b["subsubject.subject.class.idclass"])
                        // {
                        //     if(a["subsubject.subject.idsubject"]==b["subsubject.subject.idsubject"]){
                        //         if(a["subsubject.idsubsubject"]==b["subsubject.idsubsubject"]){
                        //             return a["description"]-b["description"]
                        //         }
                        //         else
                        //             return a["subsubject.idsubsubject"]-b["subsubject.idsubsubject"]
                        //     }
                        //     else 
                        //     return a["subsubject.subject.idsubject"]-b["subsubject.subject.idsubject"]
                        // }
                        // else        
                        //    return  a["subsubject.subject.class.idclass"]-b["subsubject.subject.class.idclass"]
                    }
                }
                )

                before = data[1]["subsubject.subject.class.description"];

                getDataFunc(`question/test/byStudent?idstudent=${JSON.parse(localStorage.getItem('user')).idstudent}`).then((data2) => {
                    console.log(data2);
                    data2 = data2.map((el) => { return el.idlevel })
                    console.log(data2);
                    data = data.map((e) => {
                        console.log(e.idlevel in data2);
                        console.log(27 in data2);
                        if (data2.indexOf(e.idlevel) !== -1) {
                            e["subsubject.subject.passing_grade"] = 0;
                        }
                        else {
                            e["subsubject.subject.passing_grade"] = 1;
                        }
                        return e;

                    })
                    const r = data.reduce((acc,curr) => {
                        const className = curr["subsubject.subject.class.description"];
                        
                        //{a:[{ class: "a", street: "abc" }, { class: "a", street: "def" },]}
                        
                        return { ...acc,[className]: [...(acc[className] || []),curr] };}, {});
                        
                        
                        
                        // r = { a: [], b: [] };
                        
                        
                        
                        const classesArray = Object.entries(r).map(([className,tirgulim]) => {
                        return { className, tirgulim };
                        });
                        
                        console.log(classesArray);




                        // setData(data)
                        // setFilteredData(data)
                    setData(classesArray)
                    setFilteredData(classesArray)

                })
            }
        );

        ///   }
    }, []);
    const ff=false;

    const [visiblel, setVisiblel] = useState(false);
  const footerContentLevel = (
    <div style={{width:"200px"}}>
            {/* <SelectedMaterial></SelectedMaterial> */}

      {/* <Button label="הוסף" icon="pi pi-check" onClick={(e) => addLevel(e)} autoFocus style={{backgroundColor:"#4caffe" ,borderBlock:"#4caffe",border:"#4caffe"}}/> */}
    </div>
  );

  
    return (<>
           
        <div className="card flex flex-wrap justify-content-center gap-3" >
            
            <span className="p-input-icon-left" id="search" onBlur={(e) => setD(e.target.value)} >
                <i className="pi pi-search" style={{ cursor: "pointer" }}  onClick={() => {
                    // getDataFunc(`data/getAllData`).then((da) => {

                    //     da = da.sort((a, b) => {
                    //         console.log(a["subsubject.subject.class.description"] < b["subsubject.subject.class.description"]);
                    //         if (a["subsubject.subject.class.description"] && a["subsubject.subject.description"] && a["subsubject.description"] && a.description && b["subsubject.subject.class.description"] && b["subsubject.subject.description"] && b["subsubject.description"] && b.description) {
                    //             if (a["subsubject.subject.class.description"] > b["subsubject.subject.class.description"])
                    //                 return 1;
                    //             else {
                    //                 if (a["subsubject.subject.class.description"] < b["subsubject.subject.class.description"]) return -1
                    //                 if (a["subsubject.subject.description"] > b["subsubject.subject.description"]) {
                    //                     return 1;
                    //                 }
                    //                 else {
                    //                     if (a["subsubject.subject.description"] < b["subsubject.subject.description"]) return -1;
                    //                     if (a["subsubject.description"] > b["subsubject.description"]) {
                    //                         return 1;
                    //                     }
                    //                     else {
                    //                         if (a["subsubject.description"] < b["subsubject.description"]) return -1
                    //                         if (a["description"] > b["description"]) {
                    //                             return 1;
                    //                         }
                    //                     }
                    //                 }
                    //             }
                    //             return -1;
                    //         }
                    //     })




                    //     before = data[1]["subsubject.subject.class.description"];
                        const c = d;
                        if(c==''){
                            return setFilteredData(data)
                        }
                        //  const c=document.getElementById("search").innerText;
                        // const ddd = data.filter((dd) => {
                        //     return dd["subsubject.subject.class.description"] == c || dd["subsubject.subject.description"] == c || dd["subsubject.description"] == c || dd.description == c;

                        //     })
                        // const f=false;
                        // const ddd = data.filter((dddd) => {
                        //      f=false;
                        //     dddd.tirgulim.filter((dd)=>{
                        //         if(dd["subsubject.subject.class.description"] == c || dd["subsubject.subject.description"] == c || dd["subsubject.description"] == c || dd.description == c==true)
                        //     {
                        //         f=dd["subsubject.subject.class.description"] == c || dd["subsubject.subject.description"] == c || dd["subsubject.description"] == c || dd.description == c==true;
                        //         return f;
                        //     }
                        //     return f

                        //     })
                        //  })

                        const ddd = data.map((dddd) => {
                            return {className:dddd.className,tirgulim:dddd.tirgulim.filter((dd)=>{
                              if(dd["subsubject.subject.class.description"] == c || dd["subsubject.subject.description"] == c || dd["subsubject.description"] == c || dd.description == c==true)
                              return true;

                              return false;
                            

                            })}
                         })
                            //     console.log(dd["subsubject.subject.class.description"]==c||dd["subsubject.subject.description"]==c||dd["subsubject.description"]==c||dd.description==c);
                            //  if( dd["subsubject.subject.class.description"]==c||dd["subsubject.subject.description"]==c||dd["subsubject.description"]==c||dd.description==c)
                            //  return true;
                       console.log(ddd);

                        setFilteredData([...ddd]);
                    // })
                }} />
              <InputText style={{ textAlign: "right", width: "700px" }} placeholder='חיפוש עפ"י שם כיתה , שם מקצוע , שם נושא או רמה' />
            </span>
        </div><br></br>
        <div onClick={()=>navigate("/SelectedMaterial")}  style={{direction:"ltr",cursor:"pointer",width:"100px",backgroundColor:"orange",textAlign:'left',height:"100px",borderRadius:"50%"}}><br></br><br></br> למעבר לבחירה יותר ממוקדת </div>

      {  filteredData.length > 0 &&<p style={{textAlign:'right',width:"30%",marginRight:"5%",marginBottom:"6px"}}>  הסימון <img
                    alt="x"
                    src={x}
                    height="40"
                    className="mr-2"
                    style={{marginBottom:"0px",width:"30px",height:"30px",textAlign:'left'}}
                    >
                    </img> פירושו שעדיין לא בקרתם בנושא זה,
                    ואילו<img
                    alt="v"
                    src={v}
                    height="60"
                    className="mr-2"
                    style={{marginBottom:"0px",width:"30px",height:"30px",textAlign:'left'}}
                    >
                    </img> - כן בקרתם בו</p> }

                    {/* <button onClick={()=>navigate("/SelectedMaterial")} >לבחירה מהירה</button> */}
                    {/* <Button  onClick={() => setVisiblel(true)} className="flex align-items-center justify-content-center font-bold text-white border-round m-2" style={{backgroundColor:"#4caffe" ,borderBlock:"#4caffe", minWidth: "50px", minHeight: "50px" ,border:"#4caffe"}} /> */}
        <Dialog className="text-center w-30rem" header="" visible={visiblel} style={{ width: '550vw' }} onHide={() => setVisiblel(false)} footer={footerContentLevel}>
            <div><SelectedMaterial></SelectedMaterial></div>
        </Dialog>
        {filteredData.length == 0 && <h1 style={{ textAlign: "center" }}>לא נמצאו תוצאות</h1>}
       { filteredData.length > 0&&
        <div>
      {filteredData.map((item,i) => (
       item&&item.tirgulim&&item.tirgulim.length>0&& <div >
      {  item.className!=='null'&&<h1 style={{ textAlign: "right",color:"#3d4052" }}>כיתה  {item.className}</h1>}
          <div class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
            {item.className!=='null'&&item.tirgulim.map((d) => (
              <div >
           {d.description !== '' && <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]} subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>}
              </div>
            ))}
          </div>
        </div>

      ))}
    </div>}
            

            {/* style={{ display: 'flex', flexDirection: 'row' }} */}
            {/* <div class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
            {filteredData.length > 0 && filteredData.map((d, i) => {
                //  { if(i%4==0)
                //     return <div></div>}
                // console.log(d["subsubject.subject.class.description"]!=='undified'&&d["subsubject.subject.description"]!=='undified'&&d["subsubject.description"]!=='undified'&&d.description!=='undified');
                if (d["subsubject.subject.class.description"] !== 'undified' && d["subsubject.subject.description"] !== 'undified' && d["subsubject.description"] !== 'undified' && d.description !== 'undified') {
                    if (d["subsubject.subject.class.description"] != before && d.description !== '') {
                        before = d["subsubject.subject.class.description"]
                        return <>
                            <h1 style={{ textAlign: "center" }}>כיתה  {d["subsubject.subject.class.description"]}</h1>
                            <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]} subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>
                        </>

                    }
                    return (
                        <>
                            {       //<h1 style={{textAlign:"center"}}>כיתה  {d["subsubject.subject.class.description"]}</h1>
                            }   {d.description !== '' && <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]} subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>}
                        </>)

                }
            })}</div> */}
       </>
    )
}

// <div style={{ display: 'flex', flexDirection: 'row' }}>
// {dataArray.map((item, index) => (
//   <React.Fragment key={index}>
//     <Card title={item}>
//       {/* תוכן הכרטיס */}
//     </Card>
//   </React.Fragment>
// ))}
// </div>



// <div class="card">
//     <div class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">1</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">3</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">4</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">5</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">6</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">7</div>
//         <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">8</div>
//     </div>
// </div>

// {filteredData.length > 0 && filteredData.map((dd, i) => {
//     if (dd.className!=='null') {
//        // return (<><h1 style={{ textAlign: "center" }}>כיתה  {dd.className}</h1> 
//         <div class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">
//       {  dd.tirgulim.map((d)=>{
//             return (
//                 <>      
//               {/* <h1 style={{ textAlign: "center" }}>כיתה  {dd.className}</h1>  */}
//                     {      //<h1 style={{textAlign:"center"}}>כיתה  {d["subsubject.subject.class.description"]}</h1>
//                     }   {d.description !== '' && <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]} subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>}
//                </>)

//         })   }
//       </div>
//       {/* </>
//         ) */}
       

//     }
// })}

