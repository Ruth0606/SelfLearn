import React from "react";
import TirgulQ from "../Tirgul/TirgulQ";

export default function Test() {
    var k=[1,2,3,4,5,6,7,8,9,10]
    return (
    <div>
    <h1>מבחן</h1>
    {
    k.map((val)=>{return (<TirgulQ num={val} ></TirgulQ>)} )
    }
    </div>
    )
}