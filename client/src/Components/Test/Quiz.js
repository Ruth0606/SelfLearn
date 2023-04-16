import React from "react";
import "../styles/Test.css"
import TirgulQ from "../tirgul/TirgulQ";
import GetPageQ from "../tirgul/GetPageQ"
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"

export default function Quiz(props) {

    const navigate = useNavigate();


    // async function fetchData() {
    //     useGetData('https://jsonplaceholder.typicode.com/posts',3)
    //   }

    // //   useEffect(() => {
    // //     fetchData();
    // //   }, []);

    // async function postData() {
    //     try {
    //       const data = {
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1
    //       };
    //       const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // const { idlevelorsubject,leveldescription } = useParams();

    
    return (
        <div>
            <h1 className="title">בוחן {props.leveldescription}</h1>
            {
             <GetPageQ idlevelorsubject={props.idlevelorsubject} type={3}></GetPageQ>}
            {
              <div style={{margin:"3px"}}className="card flex justify-content-center">
                     <Button label="הגש בוחן" onClick={()=>alert("בוחן הוגש")} />
              </div>
            }
            {props.leveldescription=="3"&& <button  onClick={()=>navigate("/Test",{idlevelorsubject:props.idsub})}>למבחן</button> }
        </div>
    )
}