import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import { Button } from 'primereact/button';
import useGetData from '../../Hooks/useGetData';
import {useNavigate} from "react-router-dom"
import List from '../styles/List.css'

export default function StudentList() {
    const { data: studData, loading: studLoading, error: studErr, refetch: studRefetch } = useGetData('user');
    const { data: classData, loading: classLoading, error: classErr, refetch: classRefetch } = useGetData('data/class');
    const [classes, setClasses] = useState([]);
    const { getDataFunc } = useDataFunctions();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        "classes.description": { value: null, matchMode: FilterMatchMode.IN },
        mail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        password: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} style={{ margin: "3px" }} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="חיפוש" style={{ margin: "3px" }} />
                </span>
            </div>
        );
    };

    // const renderHeader = () => {
    //     return (
    //         <div className="flex justify-content-between">
    //             <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
    //             <span className="p-input-icon-left">
    //                 <i className="pi pi-search" />
    //                 <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
    //             </span>
    //         </div>
    //     );
    // };



    ////////////////////////////////////////////
    const clearFilter = () => {
        initFilters();
    };
    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            "classes.description": { value: null, matchMode: FilterMatchMode.IN },
            mail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            password: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            // global: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            // name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            // 'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            // representative: { value: null, matchMode: FilterMatchMode.IN },
            // date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            // balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            // status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            // activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            // verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };

    //////////////////////////////////




    // const countryBodyTemplate = (rowData) => {
    //     return (
    //         <div className="flex align-items-center gap-2">
    //             <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
    //             <span>{rowData.country.name}</span>
    //         </div>
    //     );
    // };

    const gradeItemTemplate = (rowData) => {
        const c = rowData.classes;

        return (
            <div className="flex align-items-center gap-2">
                {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" /> */}
                <span>{c.description}</span>
            </div>
        );
    };

    const gradesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option.description}</span>
            </div>
        );
    };

    // const statusBodyTemplate = (rowData) => {
    //     return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    // };

    // const statusItemTemplate = (option) => {
    //     return <Tag value={option} severity={getSeverity(option)} />;
    // };
    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };
    /////////////////////////////originallllll

    // const gradeRowFilterTemplate = (options) => {
    //     return (
    //         <MultiSelect
    //             value={options.value}
    //             options={classes.map((e)=>e.description)}
    //             // itemTemplate={gradesItemTemplate}
    //             onChange=
    //             {(e) =>
    //                 {  
    //                     console.log("MultiSelect e.valueeeeeeeeeeeeeeeee")
    //                     console.log(e.value)
    //                     options.filterApplyCallback(e.value);
    //                 }
    //             } 
    //             // optionLabel="name"
    //             placeholder="בחר כיתה"
    //             className="p-column-filter"
    //             maxSelectedLabels={1}
    //             style={{ minWidth: '14rem' }}
    //         />
    //     );
    // };
    ////////////original
    const gradeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={classData}
                itemTemplate={gradesItemTemplate}
                 onChange= {(e) =>
                    {  
                        console.log('e.value',e.value);
                        options.filterApplyCallback(e.value);
                    }
                } 
                // optionLabel="name"
                placeholder="בחר כיתה"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem'}}
            />
        );
    };

    // const gradeRowFilterTemplate = (options) => {
    //     return (
    //         <MultiSelect
    //             value={options.value}
    //             options={classData?.map((e) => e.description)}
    //             itemTemplate={representativesItemTemplate}
    //             onChange= {(e) =>
    //                                 {  
    //                                     console.log('e.value',e.value);
    //                                     options.filterApplyCallback(e.value[0]);
    //                                 }
    //                             } 
    //             optionLabel="name"
    //             placeholder="Any"
    //             className="p-column-filter"
    //             maxSelectedLabels={1}
    //             style={{ minWidth: '14rem' }}
    //         />
    //     );
    // };
    /////////
    // const representativeRowFilterTemplate = (options) => {
    //     return (
    //         <MultiSelect
    //             value={options.value}
    //             options={representatives}
    //             itemTemplate={representativesItemTemplate}
    //             onChange={(e) => options.filterApplyCallback(e.value)}
    //             optionLabel="name"
    //             placeholder="Any"
    //             className="p-column-filter"
    //             maxSelectedLabels={1}
    //             style={{ minWidth: '14rem' }}
    //         />
    //     );
    // };
    // const representativesItemTemplate = (option) => {
    //     return (
    //         <div className="flex align-items-center gap-2">
    //             <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
    //             <span>{option.map((e) => e.description)}</span>
    //         </div>
    //     );
    // };
    /////////
    // const statusRowFilterTemplate = (options) => {
    //     return (
    //         <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
    //     );
    // };

    // const verifiedRowFilterTemplate = (options) => {
    //     return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    // };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={studData} paginator showGridlines rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={studLoading}
                globalFilterFields={['name', 'classes.description', 'mail', 'phone', 'id', 'password']} header={header} emptyMessage="No students found" style={{ textAlign: "right"}}>
                <Column className="text-right" field="name" header="שם" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '10rem', textAlign: "right"}} />
                {/* <Column header="grade" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={gradeItemTemplate} filter filterElement={gradeRowFilterTemplate} /> */}
                <Column className="text-right" field="grade" filter filterElement={gradeRowFilterTemplate} style={{ minWidth: '2rem', textAlign: "right" }} header="כיתה" sortable showFilterMenu={false}></Column>
                <Column className="text-right" field="mail" header="מייל" sortable filter filterPlaceholder="Search by mail" style={{ minWidth: '2rem', textAlign: "right" }} />
                <Column className="text-right" field="phone" header="טלפון" sortable filter filterPlaceholder="Search by phone" style={{ minWidth: '2rem', textAlign: "right" }} />
                <Column className="text-right" field="id" header="תעודת זהות" sortable filter filterPlaceholder="Search by id" style={{ minWidth: '2rem', textAlign: "right" }} />
                <Column className="text-right" field="password" header="סיסמא" sortable filter filterPlaceholder="Search by pass" style={{ minWidth: '2rem', textAlign: "right" }} />
               
                {/* <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" /> */}

                {/* <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} /> */}
                {/* <Column field="ismanager" header="מנהל" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} /> */}
            </DataTable> 
            <Button icon="pi pi-chart-line" label="לקבלת נתונים סטטיסטיים"  severity="secondary" outlined text raised style={{margin:"40px"}} onClick={()=>navigate("/Statistical")}/>
           {/* <BasicFilterDemo2/> */}
            {/* <Button label="לקבלת נתונים סטטיסטיים" severity="secondary" text style={{margin:"40px"}} onClick={()=>navigate("/Statistical")}/> */}
            <br></br> 
    
        </div>
    );
}