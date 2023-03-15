import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function Select() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <div className="card flex justify-content-center" style={{"marginLeft":"3%","marginRight":"3%"}} placeholder="בחר מקצוע">
            <AutoComplete value={value} suggestions={items} completeMethod={search}  placeholder="בחר מקצוע" onChange={(e) => setValue(e.value)} dropdown />
        </div>
    )
}
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

