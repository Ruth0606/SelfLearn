import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import english from '../../../img/english.jpg'
import "./CardDesign.css"
import Material from '../Material';
import GetPageQ from '../GetPageQ';
import {useNavigate,useParams} from "react-router-dom"
import x from "../../../img/x.png"
import v from "../../../img/v.png"
import BackButton from '../../BackButton';


export default function Helper(props) {
    const navigate = useNavigate();

    const {idlevel, idsubject,level,subsubject} = useParams();

    console.log( {idlevel, idsubject,level,subsubject});

    return  (<div style={{marginLeft: "10rem"}} >
    {/* {console.log(flagLevel)} */}
    <BackButton style={{textAlign:"left"}}></BackButton>
    {<Material idlevel={idlevel} subsubject={subsubject}></Material>}
    {<GetPageQ idlevelorsubject={idlevel} type={1} ></GetPageQ>}
    {/* {flagLevel &&<button onClick={()=><Quiz idlevelorsubject={selectedlevel.idlevel}idsub={selectedSubject.idsubject}leveldescription={selectedlevel.description}></Quiz>}>למעבר לבוחן</button>}     */}
  {/* {flagLevel && <button onClick={()=> {return navigate("/Quiz/1/3")}}>למעבר לבוחן</button>} */}
  {/* selectedlevel.idlevel */}
  {<Button style={{backgroundColor:"#4caffe" ,borderBlock:"#4caffe",border:"#4caffe"}}onClick={()=> {return navigate(`/Quiz/${idlevel}/${idsubject}/${level}/${subsubject}`)}}>למעבר לבוחן</Button>}
</div>
    )
}