import logo from './logo.svg';
import Home from './Components/Home';
import UserProvider from "./Components/user/UserProvider";
import Home2 from './Components/Home/Home2';
import Material from './Components/tirgul/Material';
import Select from './Components/tirgul/SelectMaterial';
import TirgulQ from './Components/tirgul/TirgulQ';
import Tirgul from "./Components/tirgul/Tirgul"
import Test from './Components/test/Test';
import GetMarks from './Components/test/GetMarks';
import Login from './Components/login/Login';
import Login2 from './Components/login/Login2';
import Signup from './Components/signup/Signup';
import Register from './Components/signup/Register';
import Quiz from './Components/test/Quiz';
import Update from './Components/manager/Updata'
import StudentList from './Components/manager/StudentList';
import StudStatistical from './Components/students/StudStatistical';
import Contact from './Components/contact/Contact';
import Statistical from './Components/manager/Statistical';
import SetProfil from './Components/profil/SetProfil';
import ContactNotRegister from "./Components/contact/ContactNotRegister"

import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import { useState ,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom"

import './App.css';
import BackToHome from './Components/Home/BackToHome';
function App() {
  
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [click, setClick] = useState(null);

  const a=localStorage.getItem("user");


  useEffect(() => {
    console.log(localStorage.getItem("user"));
    const userFromLocalStorage = localStorage.getItem("user")
    console.log(userFromLocalStorage);
    if (!userFromLocalStorage) return;
    const parsedUser = JSON.parse(userFromLocalStorage)
    console.log({ parsedUser });
    setUserId(parsedUser.idstudent)
  setPassword(parsedUser.password)
  }, []);

  const setClickCallback = (click) => {
    setClick(click);
  }
  const setUserIdCallback = (id) => {
    setUserId(id);
  }
  const setPasswordCallback = (password) => {
    setPassword(password);
  }
  return (<>
  <div style={{"direction":"rtl"}}>
        { <UserProvider userId={userId} password={password}>

      <Router>
           <div className="App" >
            <header > <Home2></Home2> {<BackToHome></BackToHome>}</header><br></br>
       <Routes>

                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/test/:idsub' element={< Test />}></Route>
                 <Route exact path='/Register' element={< Register setUserId={setUserIdCallback}  setPassword={setPasswordCallback}/>}></Route>
                 <Route exact path='/login' element={< Login2 setUserId={setUserIdCallback}  setPassword={setPasswordCallback} setClick={setClickCallback}/>}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/marks' element={< GetMarks />}></Route>
                 <Route exact path='/Tirgul' element={< Tirgul />}></Route>
                 <Route exact path='/setprofil' element={< SetProfil setUserId={setUserIdCallback}  setPassword={setPasswordCallback}/>}></Route>
                 <Route exact path='/quiz/:idlevelorsubject/:idsub/:leveldescription' element={< Quiz />}></Route>
                 <Route exact path='/update' element={<Update  />}></Route>
                 <Route exact path='/StudentList' element={< StudentList />}></Route>
                 <Route exact path='/Statistical' element={< Statistical />}></Route>
                 <Route exact path='/StudStatistical' element={< StudStatistical />}></Route>
                 <Route exact path='/ContactNotRegister' element={< ContactNotRegister />}></Route>

          </Routes>
          </div>
       </Router>
       {/* <footer><button>navigate</button></footer> */}
    </UserProvider> }
    </div>
    </>
  );
}

export default App;
