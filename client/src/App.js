import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Home2 from './Components/Home/Home2';
import Material from './Components/tirgul/Material';
import Select from './Components/tirgul/SelectMaterial';
import TirgulQ from './Components/tirgul/TirgulQ';
import Tirgul from "./Components/tirgul/Tirgul"
import Test from './Components/test/Test';
import GetMarks from './Components/test/GetMarks';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Register from './Components/signup/Register';
import Quiz from './Components/test/Quiz';
import Update from './Components/manager/Updata'
import StudentList from './Components/manager/StudentList';
import Contact from './Components/contact/Contact';
// import StudStatistical from './Components/students/StudStatistical';
import Statistical from './Components/manager/Statistical';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import UserProvider from "./Components/user/UserProvider";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom"

import StudStatistical from './Components/students/StudStatistical';
// import Register1 from './Components/signup/Register';

function App() {
  
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem("user"));
    const userFromLocalStorage = localStorage.getItem("user")
    console.log(userFromLocalStorage);
    if (!userFromLocalStorage) return;
    //setFlag(false)
    const parsedUser = JSON.parse(userFromLocalStorage)
    console.log({ parsedUser });
    setUserId(parsedUser.idstudent)
  setPassword(parsedUser.password)
  }, []);


  const setUserIdCallback = (id) => {
    setUserId(id);
  }
  const setPasswordCallback = (password) => {
    setPassword(password);
  }

  return (<>
  <div style={{"direction":"rtl"}}>
        { <UserProvider userId={userId} password={password}>
        
     {/* <Home2></Home2> */}
      {/* <Login setUserId={setUserIdCallback}></Login> */}
      <Router>
           <div className="App" >
            <header> <Home></Home> </header>
{/* {           !userId&&<Login setUserId={setUserIdCallback}  setPassword={setPasswordCallback}></Login>}     */}
       <Routes>

                 {/* <Route exact path='/' element={< Home />}></Route> */}
                 <Route exact path='/test/:idsub' element={< Test />}></Route>
                 <Route exact path='/Register' element={< Register setUserId={setUserIdCallback}  setPassword={setPasswordCallback}/>}></Route>
                 <Route exact path='/login' element={< Login setUserId={setUserIdCallback}  setPassword={setPasswordCallback}/>}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/marks' element={< GetMarks />}></Route>
                 <Route exact path='/Tirgul' element={< Tirgul />}></Route>
                 <Route exact path='/quiz/:idlevelorsubject/:idsub/:leveldescription' element={< Quiz />}></Route>
                 <Route exact path='/update' element={<Update  />}></Route>
                 <Route exact path='/StudentList' element={< StudentList />}></Route>
                 <Route exact path='/Statistical' element={< Statistical />}></Route>
                 <Route exact path='/StudStatistical' element={< StudStatistical />}></Route>
          </Routes>
          </div>
       </Router>
    </UserProvider> }
    </div>
    </>
    // <><div style={{"direction":"rtl"}}>
    // {/* style={{"direction":"rtl"}} */}
    // {/* dir="rtl" */}
    // <Router>
    //        <div className="App" >
    //        <Routes>

    //              <Route exact path='/' element={< Home2 />}></Route>
    //              <Route exact path='/test/:idsub' element={< Test />}></Route>
    //              <Route exact path='/Register' element={< Register />}></Route>
    //              <Route exact path='/login' element={< Login />}></Route>
    //              <Route exact path='/contact' element={< Contact />}></Route>
    //              <Route exact path='/signup' element={< Signup />}></Route>
    //              <Route exact path='/marks' element={< GetMarks />}></Route>
    //              <Route exact path='/Tirgul' element={< Tirgul />}></Route>
    //              <Route exact path='/quiz/:idlevelorsubject/:idsub/:leveldescription' element={< Quiz />}></Route>
    //              <Route exact path='/update' element={<Update  />}></Route>
    //              <Route exact path='/StudentList' element={< StudentList />}></Route>
    //              <Route exact path='/Statistical' element={< Statistical />}></Route>
    //              {/* <Route exact path='/StudStatistical' element={< StudStatistical />}></Route> */}
    //       </Routes>
    //       </div>
    //    </Router>
    // </div>
    // </>
  );
}

export default App;
