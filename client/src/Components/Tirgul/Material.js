
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
        getDataFunc(`material/${idlevel}`).then(
          (data) => {
            setData(data[0].description)
       console.log(data[0].description)
          }
        );
    },[])
    return (
        
        <div className="card"  style={{marginRight:"-3rem",marginLeft:"-4rem"}}>
            <Fieldset  legend={props.subsubject}>
                <p className="mx-0">{data}</p>
            </Fieldset>
        </div>
    )
}