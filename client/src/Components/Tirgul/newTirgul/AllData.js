import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { useDataFunctions } from "../../../Hooks/useDataFunctions";
import CardDesign from "./CardDesign";


export default function AllData() {
    const [data, setData] = useState([]);
    const [d, setD] = useState("");
const f=false;
    const { getDataFunc } = useDataFunctions();
function funcGetData(){

}

    let before="";
    useEffect(() => {
        // if (selectedSubject != null) {
            getDataFunc(`data/getAllData`).then(
                (data) => {
                    data=data.sort((a,b)=>{
                        console.log(a["subsubject.subject.class.description"]<b["subsubject.subject.class.description"]);
                        if(a["subsubject.subject.class.description"]&&a["subsubject.subject.description"]&&a["subsubject.description"]&&a.description&&b["subsubject.subject.class.description"]&&b["subsubject.subject.description"]&&b["subsubject.description"]&&b.description){
                            if(a["subsubject.subject.class.description"]>b["subsubject.subject.class.description"])
                                   return 1;
                            else{
                                if( a["subsubject.subject.class.description"]<b["subsubject.subject.class.description"]) return -1
                                if(a["subsubject.subject.description"]>b["subsubject.subject.description"]){
                                    return 1;
                                }
                                else{
                                    if(a["subsubject.subject.description"]<b["subsubject.subject.description"]) return -1;
                                    if(a["subsubject.description"]>b["subsubject.description"]){
                                        return 1;
                                    }
                                    else{
                                        if(a["subsubject.description"]<b["subsubject.description"]) return -1
                                        if(a["description"]>b["description"]){
                                            return 1;
                                    }
                                }
                            } }     
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
                    }}
                        )
                       before=data[1]["subsubject.subject.class.description"];
               
                 getDataFunc(`question/test/byStudent?idstudent=${JSON.parse(localStorage.getItem('user')).idstudent}`).then((data2)=>{
                    console.log(data2);
                   data2= data2.map((el)=>{return el.idlevel})
                    console.log(data2);
                   data= data.map((e)=>{
                     console.log(e.idlevel in data2);
                     console.log(27 in data2);
                        if(e.idlevel in data2){
                            e["subsubject.subject.passing_grade"]=0;
                        }
                        else{
                          e["subsubject.subject.passing_grade"]=1;
                        }
                        return e;

                    })
                    console.log(data);
                     setData(data)  

                })          
                }
              );
   
     ///   }
      }, []);
  
    return(<>
    
<div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left" id="search" onBlur={(e)=>setD(e.target.value)}>
                <i className="pi pi-search" style={{cursor:"pointer"}} onClick={()=>{
          getDataFunc(`data/getAllData`).then((da)=>{

            da=da.sort((a,b)=>{
                console.log(a["subsubject.subject.class.description"]<b["subsubject.subject.class.description"]);
                if(a["subsubject.subject.class.description"]&&a["subsubject.subject.description"]&&a["subsubject.description"]&&a.description&&b["subsubject.subject.class.description"]&&b["subsubject.subject.description"]&&b["subsubject.description"]&&b.description){
                    if(a["subsubject.subject.class.description"]>b["subsubject.subject.class.description"])
                           return 1;
                    else{
                        if( a["subsubject.subject.class.description"]<b["subsubject.subject.class.description"]) return -1
                        if(a["subsubject.subject.description"]>b["subsubject.subject.description"]){
                            return 1;
                        }
                        else{
                            if(a["subsubject.subject.description"]<b["subsubject.subject.description"]) return -1;
                            if(a["subsubject.description"]>b["subsubject.description"]){
                                return 1;
                            }
                            else{
                                if(a["subsubject.description"]<b["subsubject.description"]) return -1
                                if(a["description"]>b["description"]){
                                    return 1;
                            }
                        }
                    } }     
                    return -1; 
                }})


            
            
            before=data[1]["subsubject.subject.class.description"];
          const c=d;
    //  const c=document.getElementById("search").innerText;
          const ddd=  da.filter((dd)=>{
           return  dd["subsubject.subject.class.description"]==c||dd["subsubject.subject.description"]==c||dd["subsubject.description"]==c||dd.description==c;
          
          //     console.log(dd["subsubject.subject.class.description"]==c||dd["subsubject.subject.description"]==c||dd["subsubject.description"]==c||dd.description==c);
          //  if( dd["subsubject.subject.class.description"]==c||dd["subsubject.subject.description"]==c||dd["subsubject.description"]==c||dd.description==c)
          //  return true;
          })
          setData([...ddd]);
 })                   
                }}/>
                <InputText  style={{textAlign:"right",width:"700px"}}placeholder='חיפוש עפ"י שם כיתה , שם מקצוע , שם נושא או רמה' />
            </span>
        </div><br></br>
    <div  class="flex flex-wrap card-container blue-container column-gap-4 row-gap-6">

        {/* style={{ display: 'flex', flexDirection: 'row' }} */}
   { data.length ==0&&<h1 style={{textAlign:"center"}}>לא נמצאו תוצאות</h1>}
   {   data.length > 0&& data.map((d,i)=>{
        //  { if(i%4==0)
        //     return <div></div>}
        // console.log(d["subsubject.subject.class.description"]!=='undified'&&d["subsubject.subject.description"]!=='undified'&&d["subsubject.description"]!=='undified'&&d.description!=='undified');
      if(d["subsubject.subject.class.description"]!=='undified'&&d["subsubject.subject.description"]!=='undified'&&d["subsubject.description"]!=='undified'&&d.description!=='undified')
      

        {
            if(d["subsubject.subject.class.description"]!=before&&d.description!==''){
                before=d["subsubject.subject.class.description"]
                   return <>
                   <h1 style={{textAlign:"center"}}>כיתה  {d["subsubject.subject.class.description"]}</h1>
                   <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]}subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>
                   </>
               
            }
       return   (
       <>
{       //<h1 style={{textAlign:"center"}}>כיתה  {d["subsubject.subject.class.description"]}</h1>
}   {   d.description!==''&& <CardDesign class={d["subsubject.subject.class.description"]} subject={d["subsubject.subject.description"]}subsubject={d["subsubject.description"]} level={d.description} idlevel={d.idlevel} idsubject={d["subsubject.subject.idsubject"]} Did={d["subsubject.subject.passing_grade"]}></CardDesign>}
      </> )
    
    }       
        })}
   </div></>
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