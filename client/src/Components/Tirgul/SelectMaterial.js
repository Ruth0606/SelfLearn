import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import TirgulQ from './TirgulQ';
import useGetData from '../../Hooks/useGetData'
import GetPageQ from "./GetPageQ";


export default function SelectMaterial() {
    let idlevel=null;
    const [flagClass, setflagClass] = useState(true);
    const [flagSubject, setflagSubject] = useState(true);
    const [flagSubsubject, setflagSubsubject] = useState(true);

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedSubsubject, setSelectedSubsubject] = useState(null);
    const [selectedlevel, setSelectedlevel] = useState(null);

    const [f, setf] = useState(false);

    //useEffect(()=>setf(true),[selectedlevel])

    const classes = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    var c=[];
//     const{data,error,loading,refetch}=  useGetData("http://localhost:8000/data/class");

    
//   useEffect(()=>{console.log("data",data);},[data]);


    useGetData("http://localhost:8000/data/class").then((data)=>{
    console.log(data)
    data.forEach(element => {
    c.push({"name":element.description,"code":element.description}) 
    });
    console.log(c)
    });

    return (
        <div className="card flex justify-content-center" style={{"margin":"3%"}}>
            <Dropdown value={selectedClass} onChange={(e) => {setSelectedClass(e.value);setflagClass(false) }} options={c} optionLabel="name" 
                placeholder="בחר כיתה" className="p-invalid w-full md:w-14rem"  style={{"marginLeft":"3%","marginRight":"3%"}} />
            <Dropdown disabled={flagClass} value={selectedSubject} onChange={(e) => {setSelectedSubject(e.value);setflagSubject(false) }} options={classes} optionLabel="name" 
                placeholder="בחר מקצוע" className="p-invalid w-full md:w-14rem"  style={{"marginLeft":"3%","marginRight":"3%"}} />
            <Dropdown disabled={flagSubject} value={selectedSubsubject} onChange={(e) =>{ setSelectedSubsubject(e.value);setflagSubsubject(false)}} options={classes} optionLabel="name" 
                placeholder="בחר נושא" className="p-invalid w-full md:w-14rem"  style={{"marginLeft":"3%","marginRight":"3%"}} />
            <Dropdown disabled={flagSubsubject} value={selectedlevel} onChange={(e) =>{setSelectedlevel(e.value);setf(true);idlevel=e.value.idlevel}} options={classes} optionLabel="name" 
                placeholder="בחר רמה" className="p-invalid w-full md:w-14rem"  style={{"marginLeft":"3%","marginRight":"3%"}} />
            {f&&<GetPageQ idlevel={idlevel}></GetPageQ>}
           
        </div>
        
          
        
    )
}
    

// export default function Select() {
//     const [value, setValue] = useState('');
//     const [items, setItems] = useState([]);

//     const [value2, setValue2] = useState('');
//     const [items2, setItems2] = useState([]);

//     const [value3, setValue3] = useState('');
//     const [items3, setItems3] = useState([]);

//     const [value4, setValue4] = useState('');
//     const [items4, setItems4] = useState([]);
//     const search = (event) => {
//         let _items = [...Array(10).keys()];
//         setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
//     }
//     const search2 = (event) => {
//         let _items2 = [...Array(10).keys()];
//         setItems2(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items2);
//     }
//     const search3= (event) => {
//         let _items3 = [...Array(10).keys()];
//         setItems3(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items3);
//     }
//     const search4 = (event) => {
//         let _items4 = [...Array(10).keys()];
//         setItems4(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items4);
//     }

//     return (
//         <div className="card flex justify-content-center"  placeholder="בחר מקצוע">
//             <AutoComplete style={{"marginLeft":"2%","marginRight":"2%"}} value={value} suggestions={items} completeMethod={search}  placeholder="בחר כיתה" onChange={(e) => setValue(e.value)} dropdown />
//             <AutoComplete style={{"marginLeft":"2%","marginRight":"2%"}} value={value2} suggestions={items2} completeMethod={search2}  placeholder="בחר מקצוע" onChange={(e) => setValue2(e.value)} dropdown />
//             <AutoComplete style={{"marginLeft":"2%","marginRight":"2%"}} value={value3} suggestions={items3} completeMethod={search3}  placeholder="בחר נושא" onChange={(e) => setValue3(e.value)} dropdown />
//             <AutoComplete style={{"marginLeft":"2%","marginRight":"2%"}} value={value4} suggestions={items4} completeMethod={search4}  placeholder="בחר רמה" onChange={(e) => setValue4(e.value)} dropdown />

//         </div>
        
//     )
// }
// import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';

// export default function Select() {
//     const [selectedCity, setSelectedCity] = useState(null);
//     const [selectedCity2, setSelectedCity2] = useState(null);
//     const [selectedCity3, setSelectedCity3] = useState(null);
//     const [selectedCity4, setSelectedCity4] = useState(null);

//     const cities = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];
//     const cities2 = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];
//     const cities3 = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];
//     const cities4 = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];

//     return (
//         <div className="card flex justify-content-center">
//             <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
//                 placeholder="בחר כיתה" className="w-full md:w-14rem" style={{"marginLeft":"3%","marginRight":"3%"}}/>
//              <Dropdown value={selectedCity2} onChange={(e) => setSelectedCity2(e.value)} options={cities2} optionLabel="name" 
//                 placeholder="בחר מקצוע" className="w-full md:w-14rem" style={{"marginLeft":"3%" }}/>   
//             <Dropdown value={selectedCity3} onChange={(e) => setSelectedCity3(e.value)} options={cities3} optionLabel="name" 
//                 placeholder="בחר נושא" className="w-full md:w-14rem" style={{"marginLeft":"3%" }}/>   
//             <Dropdown value={selectedCity4} onChange={(e) => setSelectedCity3(e.value)} options={cities4} optionLabel="name" 
//                 placeholder="בחר רמה" className="w-full md:w-14rem" style={{"marginLeft":"3%" }}/>  
//         </div>
//     )
// }

