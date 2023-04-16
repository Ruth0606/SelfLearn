// import React, { useEffect , useState } from "react";
// import { useDataFunctions } from '../../Hooks/useDataFunctions'
// import useGetData from '../../Hooks/useGetData'
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from "primereact/inputtext";







// export default function StudentList() {
//     const [products, setProducts] = useState([]);
//     const { getDataFunc } = useDataFunctions();
//     useEffect(() => {
//         getDataFunc(`http://localhost:8000/user`)
//             .then(
//                 (data) => {
//                     setProducts(data);
//                 }
//             );
//     }, []);

//     return (<>
//         <div className="card flex flex-wrap justify-content-center gap-3">
//             <span className="p-input-icon-left">
//                 <i className="pi pi-search"/>
//                 <InputText placeholder="Search" onChange={(e)=>{setProducts(if(e.target.value) console.log(products.filter((elem)=>{return elem.name.includes(e.target.value)})))}}/>
//             </span>

//             {/* <span className="p-input-icon-right">
//                 <i className="pi pi-spin pi-spinner" />
//                 <InputText />
//             </span> */}
//         </div>




//         <div className="card">

//             <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem'}}>
//                 <Column field="idstudent" header="קוד תלמיד" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="name" header="שם" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="grade" header="כיתה" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="mail" header="מייל" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="phone" header="טלפון" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="id" header="תעודת זהות" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="password" header="סיסמא" sortable  style={{ textAlign: "right"}}></Column>
//                 <Column field="ismanager" header="מנהל" sortable  style={{ textAlign: "right"}}></Column>
//             </DataTable>
//         </div></>
//     );
// }




