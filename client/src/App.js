import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Material from './Components/tirgul/Material';
import Select from './Components/tirgul/SelectMaterial';
import TirgulQ from './Components/tirgul/TirgulQ';
import Tirgul from "./Components/tirgul/Tirgul"
import Test from './Components/test/Test';
import GetMarks from './Components/test/GetMarks';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Quiz from './Components/test/Quiz';
import Update from './Components/manager/Updata'

function App() {
  return (
    <>
    <div style={{"direction":"rtl"}}>
    
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/test' element={< Test />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/marks' element={< GetMarks />}></Route>
                 <Route exact path='/Tirgul' element={< Tirgul />}></Route>
                 <Route exact path='/quiz' element={< Quiz />}></Route>
                 <Route exact path='/update' element={<Update  />}></Route>

          </Routes>
          </div>
       </Router>
    </div>
    </>
  );
}

export default App;
