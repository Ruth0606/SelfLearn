import { useNavigate, useLocation } from "react-router-dom"
import homeLogo from "../../img/homeLogo.png"
 
export default function BackToHome() {

    const func=()=>{
        navigate("/")
        }
        const navigate=useNavigate();

    return(<div style={{textAlign:"left",marginTop:"1%"}}>
            {/* <button > */}
            <img
       alt="logo"
      src={homeLogo}
      height="60"
      className="mr-2"
      onClick={func}
      style={{cursor: "pointer"}}
    ></img>
     {/* </button> */}

    </div>)
}