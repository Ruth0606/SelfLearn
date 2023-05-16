import SelectedMaterial from './SelectMaterial'
import {useNavigate} from "react-router-dom"
import AllData from "../tirgul/newTirgul/AllData"

export default function Tirgul(){
    const navigate = useNavigate();
    return(
        <>
        
     <AllData></AllData>
        {/* <SelectedMaterial ></SelectedMaterial> */}

       {/* <button onClick={()=>navigate("/Quiz")}>למעבר לבוחן</button> */}

        {/* <button  onClick={()=>navigate("/Test")}>למבחן</button> */}

        </>
    );
}