import React,{useState} from "react";
import "../styles/Test.css"
import TirgulQ from "../tirgul/TirgulQ";
import GetPageQ from "../tirgul/GetPageQ"
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";

export default function Test(props) {


    const {idsub} = useParams();
    console.log("props.idlevel", props.idsub);


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
    const [flag,setFlag]=useState("none");


    return (
        <div>
            <h1 className="title">מבחן</h1>
            {
             <GetPageQ idlevelorsubject={idsub} type={2} ></GetPageQ>}
            {/* {
              <div style={{margin:"3px"}}className="card flex justify-content-center">
                     <Button label="הגש מבחן" onClick={()=>{setFlag("block");alert("מבחן הוגש")}} />
              </div>
            } */}
        </div>
    )
}