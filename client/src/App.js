import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Material from './Components/Tirgul/Material';
import Select from './Components/Tirgul/SelectMaterial';
import TirgulQ from './Components/Tirgul/TirgulQ';

function App() {
  return (
    < >
    <div style={{"direction":"rtl"}}>
    <Home/><br/>
    <Select/><br/>
    <Material/> <br/>
   <TirgulQ/>
    </div>
    </>
  );
}

export default App;
