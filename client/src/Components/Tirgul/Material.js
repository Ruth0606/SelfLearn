
import { Fieldset } from 'primereact/fieldset';
import useGetData from '../../Hooks/useGetData';
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import React, { useEffect, useState } from "react";
import "../styles/Tirgul.css"


export default function Material(props) {
    const [data, setData] = useState(null);
    const { getDataFunc } = useDataFunctions();

    useEffect(()=>{
        const idlevel = props.idlevel;
        getDataFunc(`http://localhost:8000/material/${idlevel}`).then(
          (data) => {
            setData(data[0].description)
       console.log(data[0].description)
          }
        );
    })

    // const {
    //     data,
    //     error,
    //     loading,
    //     refetch,
    // } = useGetData(`http://localhost:8000/material/byidlevel/${props.idlevel}`);
  
    return (
        
        <div className="card">
            <Fieldset legend={props.subsubject}>
                <p className="m-0">{data}</p>
            </Fieldset>
        </div>
    )
}