
import Home2 from "./Home/Home2"
import learn from '../img/learn.png'
import { useEffect ,useContext} from "react"
// import search from '../img/search.png'
// import computer from '../img/computer.png'
// import arrow from '../img/arrow.png'
import penPaper from '../img/penPaper.png'
import three from '../img/three.png'
import ContactNotRegister from "./contact/ContactNotRegister"
import UserContext from '../Components/user/UserContext'
import Recommendations from '../Components/Home/recommendations/Recommendations'
// import a from '../img/a.png'
// import b from '../img/b.png'
// import c from '../img/c.png'
const Home=()=>{
  const a=localStorage.getItem("user");
  const user = useContext(UserContext);
  console.log({user});

//   const user=null;
//   useEffect(() => {
//      user=JSON.parse(localStorage.getItem('user'))
//     console.log({user});
//  }, []);

console.log(a);
    return(<>
     <img src={learn} alt="learn" width={"100%"} height={"70%"}/>
     <div className="bg-white h-500rem h-5rem"></div>
     <img src={three} alt="three" width={"80%"} height={"70%"}/>
     <div className="bg-white h-500rem h-5rem"></div>

     <div id="con"><ContactNotRegister></ContactNotRegister></div>
   
     <div className="bg-white h-500rem h-24rem"></div>
     <Recommendations></Recommendations>
   </>)
}
export default Home