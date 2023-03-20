import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import TirgulQ from "./TirgulQ";
import useGetData from "../../Hooks/useGetData";
import GetPageQ from "./GetPageQ";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import "../styles/Tirgul.css"
import Material from "./Material";

export default function SelectMaterial() {
  const { getDataFunc } = useDataFunctions();

  let idlevel = null;
  const [flagClass, setflagClass] = useState(true);
  const [flagSubject, setflagSubject] = useState(true);
  const [flagSubsubject, setflagSubsubject] = useState(true);
  const [flagLevel, setflagLevel] = useState(false);


  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubsubject, setSelectedSubsubject] = useState(null);
  const [selectedlevel, setSelectedlevel] = useState(null);

  const [arrsubjects, setArrsubjects] = useState([]);
  const [arrsubsubjects, setArrsubsubjects] = useState([]);
  const [arrlevels, setArrlevels] = useState([]);


  //useEffect(()=>setf(true),[selectedlevel])

  // const classes = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  //   { name: "London", code: "LDN" },
  //   { name: "Istanbul", code: "IST" },
  //   { name: "Paris", code: "PRS" },
  // ];
  // const classes2 = [
  //   { name: "b", code: "NY" },
  //   { name: "d", code: "RM" },
  //   { name: "g", code: "LDN" },
  //   { name: "i", code: "IST" },
  //   { name: "o", code: "PRS" },
  // ];
  //let arrclasses = [];
 // let arrsubjects = [];
  const {
    data: dataClass,
    error,
    loading,
    refetch,
  } = useGetData("http://localhost:8000/data/class");

  //     useGetData("http://localhost:8000/data/class").then((data)=>{
  //     //console.log(data)
  //     data.forEach(element => {   //   console.log(element);
  //         arrclasses.push({"description":element.description,"id":element.idclass})
  //     });
  //    // arrclasses=data;
  //     console.log("arrclasses",arrclasses)
  //     });
  //     // console.log(classes2)

  useEffect(() => {
    //console.log("selectedClass", selectedClass);
    if (selectedClass != null) {
      // console.log("selectedClass", selectedClass);
      // console.log("dataClass", dataClass);

      //   const arr = dataClass.filter(
      //     (el) => el.description == selectedClass.description
      //   );
      //   const idclass = arr[0].idclass;
      const idclass = selectedClass.idclass;
      getDataFunc(`http://localhost:8000/data/subject/${idclass}`).then(
        (data) => {
          // console.log(data);
          setArrsubjects (data) ;
          // data.forEach(element => {
          //     arrsubjects.push({"description":element.description,"id":element.id})
          // });
          // console.log("arrsubjects", arrsubjects);
        }
      );
      //const { data: dataSubject, error,  loading,refetch,} = useGetData(`http://localhost:8000/data/subject/${idclass}`);

      // const arr=arrclasses.filter((el)=>el.description==selectedClass.description);
      // console.log(arrclasses)
      // console.log(arr)
      // const idclass=arr[0].id;
      // getDataFunc(`http://localhost:8000/data/subject/${idclass}`).then((data)=>{
      //     console.log(data)
      //     arrsubjects=data;
      //     // data.forEach(element => {
      //     //     arrsubjects.push({"description":element.description,"id":element.id})
      //     // });
      //     console.log(arrsubjects)
      //     });
    }
  }, [selectedClass]);

  useEffect(() => {
    if (selectedSubject != null) {
      const idsubject = selectedSubject.idsubject;
      getDataFunc(`http://localhost:8000/data/subsubject/${idsubject}`).then(
        (data) => {
         
          setArrsubsubjects (data) ;
         // console.log("setArrsubsubjects", arrsubsubjects);
        }
      );
    }
  }, [selectedSubject]);


  
  useEffect(() => {
    if (selectedSubsubject != null) {
      const idsubsubject = selectedSubsubject.idsubsubject;
      getDataFunc(`http://localhost:8000/data/level/${idsubsubject}`).then(
        (data) => {
        
          setArrlevels (data) ;
          //console.log("setArrsubsubjects", arrsubsubjects);
        }
      );
    }
  }, [selectedSubsubject]);
  

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="card flex justify-content-center" style={{ margin: "3%"}}>
      {dataClass.length && (
        <Dropdown
      
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.value);
            setflagClass(false);
            //console.log(e.value);
          }}
          options={dataClass}
          optionLabel="description"
          placeholder="בחר כיתה"
          className="Dropdown"
          style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%",backgroundColor:" #f9f9f9 ",borderColor: "#4CAF50"}}
        />
      )}
      <Dropdown
        disabled={flagClass}
        value={selectedSubject}
        onChange={(e) => {
          setSelectedSubject(e.value);
          setflagSubject(false);
        }}
        options={arrsubjects}
        optionLabel="description"
        placeholder="בחר מקצוע"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      />
      <Dropdown
        disabled={flagSubject}
        value={selectedSubsubject}
        onChange={(e) => {
          setSelectedSubsubject(e.value);
          setflagSubsubject(false);
        }}
        options={arrsubsubjects}
        optionLabel="description"
        placeholder="בחר נושא"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%",width:"15%" }}
      />
      <Dropdown
        disabled={flagSubsubject}
        value={selectedlevel}
        onChange={(e) => {
          setSelectedlevel(e.value);
          setflagLevel(true);
          idlevel = e.value.idlevel;
        }}
        options={arrlevels}
        optionLabel="description"
        placeholder="בחר רמה"
        className="Dropdown"
        style={{ marginLeft: "3%", marginRight: "3%" ,width:"15%"}}
      />
      {/* {console.log(flagLevel)} */}
      {flagLevel && <Material idlevel={selectedlevel.idlevel} subsubject={selectedSubsubject.description}></Material>}
     
      {flagLevel && <GetPageQ idlevel={selectedlevel.idlevel}></GetPageQ>}
    </div>
  );
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
