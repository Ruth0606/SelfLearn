import { useEffect } from "react"
import StatPie from "./StatPie1"
import { useDataFunctions } from "../../Hooks/useDataFunctions";



export default function Pies() {
    const { getDataFunc } = useDataFunctions();

    const avg=[];
    const sub=[];
    const cnt=[];
    useEffect(()=>{
        getDataFunc(`question/test/getCountTestsforSubject`).then(

            (tests) => {
         tests.forEach(element => {
            if(element.avg>0&&tests.length>sub.length){
                avg.push(element.avg);
                sub.push(element["subject.description"])
                cnt.push(element.count)
            }
         });
         console.log(avg,sub,cnt);
        })

    },[])


    return(sub.length>0&&<>
            <h2> ממוצע הציונים של מבחנים עבור כל מקצוע </h2> 
             <StatPie labels={sub} data={avg} ></StatPie>
          
             <h2> כמות המבחנים עבור כל מקצוע </h2> 
             <StatPie labels={sub} data={cnt}></StatPie>
    </>)


}