import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Material from './Components/tirgul/Material';
import Select from './Components/tirgul/SelectMaterial';
import TirgulQ from './Components/tirgul/TirgulQ';
import Test from './Components/test/Test';
import Login from './Components/login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tirgul from './Components/tirgul/Tirgul';

function App() {
  return (
    < >
      <div style={{ "direction": "rtl" }}>

        <Router>
          <div className="App">
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/Test' element={< Test />}></Route>
              <Route exact path='/Tirgul' element={< Tirgul />}></Route>
            </Routes>
          </div>
        </Router>

        {/* <Home/><br/> */}
        {/* <Select/><br/>
    <Material/> <br/>
    <TirgulQ/> */}
        {/* <Test></Test> */}

        {/* <Login></Login> */}

        {/* <Login></Login> */}
      </div>
    </>
  );
}

export default App;
