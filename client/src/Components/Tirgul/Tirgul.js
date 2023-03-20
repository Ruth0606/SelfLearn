import SelectedMaterial from './SelectMaterial'
import {useNavigate} from "react-router-dom"

export default function Tirgul(){
    const navigate = useNavigate();
    return(
        <>
        <SelectedMaterial ></SelectedMaterial>

        <button  onClick={()=>navigate("/Test")}>למבחן</button>

        </>
    );
}