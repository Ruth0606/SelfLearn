import { useNavigate, useLocation } from "react-router-dom"
import homeLogo from "../../img/niceHome.png"
 
export default function BackToHome() {

    const func=()=>{
        navigate("/")
        }
        const navigate=useNavigate();

    return(<div style={{textAlign:"right",marginTop:"1%",marginRight:"12px"}}>
            {/* <button > */}
            <img
       alt="logo"
      src={homeLogo}
      height="60"
      className="mr-2"
      onClick={func}
      style={{cursor:"pointer",marginBottom:"0px",width:"40px",height:"40px"}}
    ></img>
    <h5 style={{marginTop:"0px",marginRight:"8px",color:"orange",fontSize:"11px",fontWeight:"lighter",marginBottom:"0px"}}>לדף הבית</h5>
     {/* </button> */}

    </div>)
}