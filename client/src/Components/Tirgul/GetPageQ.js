import React from 'react'; 
import useGetData from '../../Hooks/useGetData';
export default function GetPageQ(props) {
    useGetData(`http://localhost:8000/question/1/${props.idlevel}`).then((data)=>{
        console.log(data)
       // data.forEach(element => {
        //c.push({"name":element.description,"code":element.description})
        });
        //console.log(c)
        //});
    
    return (
      <>

      </>  
    )
}