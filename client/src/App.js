import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Material from './Components/Tirgul/Material';
import Select from './Components/Tirgul/SelectMaterial';
import TirgulQ from './Components/Tirgul/TirgulQ';
import Test from './Components/Test/Test';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tirgul from './Components/Tirgul/Tirgul';

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
