import React, { useState, useEffect } from 'react';
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

export default function Statistical() {

    // const { data, loading, error, refetch } = useGetData('http://localhost:8000/user');
    const [numStud, setNumStud] = useState([]);
    const { getDataFunc } = useDataFunctions();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {   //קבלת נתוני תלמידים(לקוחות)
        getDataFunc('http://localhost:8000/user').then((data) => {
            setNumStud(data);
        });
    }, []);

    useEffect(() => {   //קבלת נתוני תלמידים(לקוחות)
        getDataFunc('http://localhost:8000/data/subject').then((data) => {
            setSubjects(data);
        });
    }, []);

// const getSubjects = ()=>
// {
//     const [sortKey, setSortKey] = useState('');
//     const [sortOrder, setSortOrder] = useState(0);
//     const [sortField, setSortField] = useState('');
//     const sortOptions = [
//         { label: 'Average High to Low', value: '!price' },
//         { label: 'Average Low to High', value: 'price' }
//     ];
//     const onSortChange = (event) => {
//         const value = event.value;

//         if (value.indexOf('!') === 0) {
//             setSortOrder(-1);
//             setSortField(value.substring(1, value.length));
//             setSortKey(value);
//         } else {
//             setSortOrder(1);
//             setSortField(value);
//             setSortKey(value);
//         }
//     };

//     const header = () => {
//         return <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} className="w-full sm:w-14rem" />;
//     };

//     const itemTemplate = (product) => {
//         return (
//             <div className="col-12">
//                 <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
//                     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
//                     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
//                         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
//                             <div className="text-2xl font-bold text-900">{subjects.description}</div>
//                             <Rating value={subjects.passing_grade} readOnly cancel={false}></Rating>
//                             <div className="flex align-items-center gap-3">
//                                 <span className="flex align-items-center gap-2">
//                                     <i className="pi pi-tag"></i>
//                                     <span className="font-semibold">{subjects.description}</span>
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
//                             <span className="text-2xl font-semibold">${subjects.passing_grade}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="card">
//             <DataView value={products} itemTemplate={itemTemplate} header={header()} sortField={sortField} sortOrder={sortOrder} />
//         </div>
//     )
// }


    return (
        <>
            <Button type="button"  icon="pi pi-users" outlined badge={numStud.length} badgeClassName="p-badge-danger" label="משתמשים" />
            <Button label="פירוט מקצועות" severity="secondary" text raised onClick={()=>{


            } }/>
        </>
    );
}