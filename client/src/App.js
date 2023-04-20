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
import Quiz from './Components/test/Quiz';
import Update from './Components/manager/Updata'
import StudentList from './Components/manager/StudentList';
import StudStatistical from './Components/students/StudStatistical';
import Statistical from './Components/manager/Statistical';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <><div style={{"direction":"rtl"}}>
    {/* style={{"direction":"rtl"}} */}
    {/* dir="rtl" */}
    <Router>
           <div className="App" >
           <Routes>

                 <Route exact path='/' element={< Home2 />}></Route>
                 <Route exact path='/test/:idsub' element={< Test />}></Route>
                 
                 <Route exact path='/login' element={< Login />}></Route>
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
    </div>
    </>
  );
}

export default App;
