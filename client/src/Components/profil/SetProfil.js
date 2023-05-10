// import React, { useRef, useState, useEffect } from 'react';
// import { Card } from 'primereact/card';
// import { InputNumber } from 'primereact/inputnumber';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// // import { fetchData, postData, putData, getGovIl } from '../Hooks/useAxiosGet';
// import { Toast } from 'primereact/toast';
// import { ConfirmPopup } from 'primereact/confirmpopup';
// import { AutoComplete } from 'primereact/autocomplete';
// import { useNavigate } from "react-router-dom"; 
// import PaymentSettings from "./PaymentSettings";

// const tenant = { building_id: 1, apartment_id:1 }

// const SetProfil = () => {

//     const [objToData, setObjToData] = useState({
//         city: null,
//         zip_code: null,
//         street: null,
//         num_in_street: null,
//         payment_setting_id:null,
//         bank_name: null,
//         bank_account: null,
//         branch_address: null,
//         branch_num: null,
//         account_owner_name: null
//     });

//     const [buildingSettings, setBuildingSettings] = useState(null);
//     const [edit, setEdit] = useState(buildingSettings ? true : false);
//     const [selectedCity, setSelectedCity] = useState(null);
//     const [filteredCities, setFilteredCities] = useState(null);
//     const [cities, setCities] = useState(null);
//     const [selectedStreet, setSelectedStreet] = useState(null);
//     const [filteredStreets, setFilteredStreets] = useState(null);
//     const [streets, setStreets] = useState(null);
//     const [zipCode, setZipCode] = useState(null);
//     const [buildingNumber, setBuildingNumber] = useState(null);
//     const [paymantSettingsId, setPaymentSettingsId] = useState(null);
//     const [bankName, setBankName] = useState(null);
//     const [bankAccount, setBankAccount] = useState(null);
//     const [branchAddress, setBranchAddress] = useState(null);
//     const [branchNum, setBranchNum] = useState(null);
//     const [accountOwnerName, setAccountOwnerName] = useState(null);
//     const [isFirst, setIsFirst] = useState(true);
//     const [visible, setVisible] = useState(false);
//     const [paymentSettings, setPaymentSettings] = useState(false);
//     const toast = useRef(null);
//     const buttonEl = useRef(null);

//     const getCities = async () => {
//         const myData = await getGovIl(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=500000`);
//         console.log("cities", myData);
//         console.log("records", myData.result.records[1].שם_ישוב);
//         if(myData)
//             setCities(myData.result.records);
//     } 
    
//     const getStreets = async () => {
//         const myData = await getGovIl(`https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&q=${selectedCity.סמל_ישוב}&limit=500000`);
//         console.log("streets", myData);
//         // console.log("records", myData.result.records[1].שם_ישוב);
//         if(myData)
//             setStreets(myData.result.records);
//     }

//     const getBuildingSettings = async (url) => {
//         const myData = await fetchData(url);
//         debugger;
//         console.log("myData", myData);
//         setBuildingSettings(myData);                     
//     }

//     useEffect(() => {
//         getCities();
//         console.log(`building/${tenant.building_id}`);
//         getBuildingSettings(`building/${tenant.building_id}`);
//     }, [])

//     useEffect(() => {
//         if(selectedCity!=null){
//             console.log("selectedCity", selectedCity);
//             getStreets();
//         }
//     }, [ selectedCity ])

//     const handleChange = (selected, key) => {
//         setObjToData((prev) => ({ ...prev, [key]: selected }))
//     }

//     const searchCity = (event) => {
//         if(cities?.length){
//             let query = event.query;
//             let _filteredCities = [];

//             for(let i = 0; i < cities?.length; i++) {
//                 let city = cities[i];
//                 if (city.שם_ישוב.indexOf(query) === 0) {
//                     _filteredCities.push(city);
//                 }
//             }
//         setFilteredCities(_filteredCities);
//         }
//     }

//     const searchStreet = (event) => {
//         if(streets?.length){
//             let query = event.query;
//             let _filteredStreets = [];

//             for(let i = 0; i < streets?.length; i++) {
//                 let street = streets[i];
//                 if (street.שם_רחוב.indexOf(query) === 0) {
//                     _filteredStreets.push(street);
//                 }
//             }
//         setFilteredStreets(_filteredStreets);
//         }
//     }

//     useEffect(() => {
//         if(buildingSettings!=null){
//             if(buildingSettings.city != null)
//                 setSelectedCity(buildingSettings.city);
//             if(buildingSettings.zip_code != null)
//                 setZipCode(buildingSettings.zip_code);
//             if(buildingSettings.street != null)
//                 setSelectedStreet(buildingSettings.street);
//             if(buildingSettings.num_in_street != null)
//                 setBuildingNumber(buildingSettings.num_in_street);
//             if(buildingSettings.payment_setting_id != null)
//                 setPaymentSettingsId(buildingSettings.payment_setting_id);
//             if(buildingSettings.bank_name != null)
//                 setBankName(buildingSettings.bank_name);
//             if(buildingSettings.bank_account != null)
//                 setBankAccount(buildingSettings.bank_account);
//             if(buildingSettings.branch_address != null)
//                 setBranchAddress(buildingSettings.branch_address);
//             if(buildingSettings.branch_num != null)
//                 setBranchNum(buildingSettings.branch_num);
//             if(buildingSettings.account_owner_name != null)
//                 setAccountOwnerName(buildingSettings.account_owner_name);
//             setEdit(true);
//             setIsFirst(false);
//         }
         
//     }, [ buildingSettings ])

//     useEffect(()=>{
//         console.log("objToData", objToData); 
//     }, [objToData])

//     const accept = async () => {
//         if(isFirst){
//             await postData(`building`, objToData);
//             debugger;
//         }           
//         else{
//             const x = buildingSettings;
//             if(x.city!=objToData.city && objToData.city!=null)
//                 x.city=objToData.city;
//             if(x.zip_code!=objToData.zip_code && objToData.zip_code!=null)
//                 x.zip_code=objToData.zip_code;
//             if(x.street!=objToData.street && objToData.street!=null)
//                 x.street=objToData.street;
//             if(x.num_in_street!=objToData.num_in_street && objToData.num_in_street!=null)
//                 x.num_in_street=objToData.num_in_street;
//             if(x.payment_setting_id!=objToData.payment_setting_id && objToData.payment_setting_id!=null)
//                 x.payment_setting_id=objToData.payment_setting_id;
//             if(x.bank_name!=objToData.bank_name)
//                 x.bank_name=objToData.bank_name;
//             if(x.bank_account!=objToData.bank_account)
//                 x.bank_account=objToData.bank_account;
//             if(x.branch_address!=objToData.branch_address)
//                 x.branch_address=objToData.branch_address;
//             if(x.branch_num!=objToData.branch_num && objToData.branch_num!=null)
//                 x.branch_num=objToData.branch_num;
//             if(x.account_owner_name!=objToData.account_owner_name && objToData.account_owner_name!=null)
//                 x.account_owner_name=objToData.account_owner_name;
//             await putData(`building/${tenant.building_id}`, x);
//             debugger;
//         }
//         toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'המידע נשלח בהצלחה', life: 3000 });
//     };

//     const reject = () => {
//         toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'המידע לא נשלח', life: 3000 });
//     };

//     return (
//         <>
//         {!paymentSettings?
//         <div className="flex justify-content-center" style={{ padding: "5%" }}>
//             <Card title="הגדרות בניין" style={{ width: "430px" }}>
//                 <div className="flex flex-column gap-3">
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>עיר: </span>
//                         <AutoComplete 
//                             disabled={edit}
//                             value={selectedCity} 
//                             suggestions={filteredCities} 
//                             completeMethod={searchCity} 
//                             style={{direction:"ltr"}}
//                             virtualScrollerOptions={{ itemSize: 38 }} 
//                             field="שם_ישוב" 
//                             dropdown 
//                             onChange={(e) =>{
//                                 setSelectedCity(e.target.value);
//                                 handleChange(e.target.value.שם_ישוב, "city");
//                             }}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מיקוד: </span>
//                         <InputNumber
//                             readOnly={edit}
//                             inputId="withoutgrouping"
//                             value={zipCode}
//                             onValueChange={(e) => {
//                                 setZipCode(e.target.value);
//                                 handleChange(e.target.value, "zip_code")
//                             }}
//                             useGrouping={false}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>רחוב: </span>
//                         <AutoComplete 
//                             disabled={edit}
//                             value={selectedStreet} 
//                             suggestions={filteredStreets} 
//                             completeMethod={searchStreet} 
//                             style={{direction:"ltr"}}
//                             virtualScrollerOptions={{ itemSize: 38 }} 
//                             field="שם_רחוב" 
//                             dropdown 
//                             onChange={(e) =>{
//                                 setSelectedStreet(e.target.value);
//                                 handleChange(e.target.value.שם_רחוב, "street");
//                             }}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מספר בניין: </span>
//                         <InputNumber
//                             readOnly={edit}
//                             inputId="withoutgrouping"
//                             value={buildingNumber}
//                             onValueChange={(e) => {
//                                 setBuildingNumber(e.target.value);
//                                 handleChange(e.target.value, "num_in_street")
//                             }}
//                             useGrouping={false}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>שם הבנק: </span>
//                         <InputText 
//                             readOnly={edit}
//                             id="bankName" 
//                             value={bankName}
//                             onChange={(e) => {
//                                 setBankName(e.target.value)
//                                 handleChange(e.target.value, "bank_name")
//                             }}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מספר חשבון: </span>
//                         <InputNumber
//                             readOnly={edit}
//                             inputId="withoutgrouping"
//                             value={bankAccount}
//                             onValueChange={(e) => {
//                                 setBankAccount(e.target.value);
//                                 handleChange(e.target.value, "bank_account")
//                             }}
//                             useGrouping={false}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>כתובת הסניף: </span>
//                         <InputText 
//                             readOnly={edit}
//                             id="branchAddress" 
//                             value={branchAddress}
//                             onChange={(e) => {
//                                 setBranchAddress(e.target.value)
//                                 handleChange(e.target.value, "branch_address")
//                             }}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מספר הסניף: </span>
//                         <InputNumber
//                             readOnly={edit}
//                             inputId="withoutgrouping"
//                             value={branchNum}
//                             onValueChange={(e) => {
//                                 setBranchNum(e.target.value);
//                                 handleChange(e.target.value, "branch_num")
//                             }}
//                             useGrouping={false}
//                         />
//                     </span>
//                     <span>
//                         <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}> שם בעל החשבון: </span>
//                         <InputText 
//                             readOnly={edit}
//                             id="branchAddress" 
//                             value={accountOwnerName}
//                             onChange={(e) => {
//                                 setAccountOwnerName(e.target.value)
//                                 handleChange(e.target.value, "account_owner_name")
//                             }}
//                         />
//                     </span>
//                 </div><br />
//                 {
//                     edit ?
//                         <Button type="submit" label="עריכת הגדרות" className="mt-2" icon="pi pi-file-edit" style={{direction: "ltr"}} onClick={() => { setEdit(false); }} /> :
//                         !isFirst ?
//                         <>
//                         <Toast ref={toast} />
//                         <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)}
//                             message="האם הנך בטוח/ה שברצונך ליצור הצבעה חדשה" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
//                         <div>
//                             <Button
//                                 ref={buttonEl}
//                                 onClick={() => {
//                                     // console.log(objToData);
//                                     setVisible(true);
//                                 }}
//                                 icon="pi pi-check-circle"
//                                 label="שמור"
//                                 style={{direction: "ltr"}}
//                             />
//                         </div>
//                         </>:
//                         <div>
//                         <Button
//                             ref={buttonEl}
//                             onClick={() => {
//                                 setPaymentSettings(true)
//                             }}
//                             icon="pi pi-check-circle"
//                             label="להגדרות גביה"
//                             style={{direction: "ltr"}}
//                         />
//                         </div>
//                 }      
//             </Card> 
//         </div>:
//             <PaymentSettings building={objToData}></PaymentSettings>
//         }
//         </>
//     )
// }

// export default SetProfil;


import React, { useRef, useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { fetchData, postData, putData, getGovIl } from '../Hooks/useAxiosGet';
import { Toast } from 'primereact/toast';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { AutoComplete } from 'primereact/autocomplete';
import { useNavigate } from "react-router-dom"; 
// import PaymentSettings from "./PaymentSettings";
import { useDataFunctions } from "../../Hooks/useDataFunctions";
import useGetData from '../../Hooks/useGetData';




const tenant = { building_id: 1, apartment_id:1 }


const SetProfil = (props) => {

    const {
        data: dataUser,
        error,
        loading,
        refetch,
      } = useGetData(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`);
      useEffect(() => {
       console.log('dataUser',dataUser);
       setstudentSettings(dataUser)
    }, [])

      const { postDataFunc, updateDataFunc, deleteDataFunc ,getDataFunc} = useDataFunctions()
    //   updateDataFunc((`data/subsubject/${selectedSubsubject.idsubsubject}`), { description: sub, idsubject: selectedSubject.idsubject })



    const [objToData, setObjToData] = useState({
        // city: null,
        // zip_code: null,
        // street: null,
        // num_in_street: null,
        // payment_setting_id:null,
        // bank_name: null,
        // bank_account: null,
        // branch_address: null,
        // branch_num: null,
        // account_owner_name: null
        name: null,
        grade: null,
        mail: null,
        phone: null,
        id:null,
        password: null
    });

    const [studentSettings, setstudentSettings] = useState(null);
    const [edit, setEdit] = useState(studentSettings ? true : false);
    // const [selectedCity, setSelectedCity] = useState(null);
    // const [filteredCities, setFilteredCities] = useState(null);
    // const [cities, setCities] = useState(null);
    // const [selectedStreet, setSelectedStreet] = useState(null);
    // const [filteredStreets, setFilteredStreets] = useState(null);
    // const [streets, setStreets] = useState(null);
    // const [zipCode, setZipCode] = useState(null);
    // const [buildingNumber, setBuildingNumber] = useState(null);
    // const [paymantSettingsId, setPaymentSettingsId] = useState(null);
    // const [bankName, setBankName] = useState(null);
    // const [bankAccount, setBankAccount] = useState(null);
    // const [branchAddress, setBranchAddress] = useState(null);
    // const [branchNum, setBranchNum] = useState(null);
    // const [accountOwnerName, setAccountOwnerName] = useState(null);
    // const [isFirst, setIsFirst] = useState(true);
    const [visible, setVisible] = useState(false);
    // const [paymentSettings, setPaymentSettings] = useState(false);


    const [name, setName] = useState(false);
    const [grade, setGrade] = useState(false);
    const [mail, setMail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [id, setId] = useState(false);
    const [password, setPassword] = useState(false);



    const toast = useRef(null);
    const buttonEl = useRef(null);

    const getCities = async () => {
        // const myData = await getGovIl(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=500000`);
        // console.log("cities", myData);
        // console.log("records", myData.result.records[1].שם_ישוב);
        // if(myData)
        //     setCities(myData.result.records);
    } 
    
    const getStreets = async () => {
        // const myData = await getGovIl(`https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&q=${selectedCity.סמל_ישוב}&limit=500000`);
        // console.log("streets", myData);
        // console.log("records", myData.result.records[1].שם_ישוב);
        // if(myData)
            // setStreets(myData.result.records);
    }

    const getStudentSettings = async (url) => {
        const myData= await getDataFunc(url);
                // debugger;
        console.log("myData", myData);
        setstudentSettings(myData);                     
    }

    useEffect(() => {
        console.log(`url that sent ::: user/${JSON.parse(localStorage.getItem('user')).idstudent}`);
        // const myData=getDataFunc(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`);
        // setstudentSettings(myData);    
        // console.log("myData",myData);

        getStudentSettings(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`)
        // setstudentSettings(getDataFunc(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`))
        console.log("studentSet...",studentSettings);
    }, [])

    // useEffect(() => {
    //     if(selectedCity!=null){
    //         console.log("selectedCity", selectedCity);
    //         getStreets();
    //     }
    // }, [ selectedCity ])

    const handleChange = (selected, key) => {
        setObjToData((prev) => ({ ...prev, [key]: selected }))
    }

    // const searchCity = (event) => {
    //     if(cities?.length){
    //         let query = event.query;
    //         let _filteredCities = [];

    //         for(let i = 0; i < cities?.length; i++) {
    //             let city = cities[i];
    //             if (city.שם_ישוב.indexOf(query) === 0) {
    //                 _filteredCities.push(city);
    //             }
    //         }
    //     setFilteredCities(_filteredCities);
    //     }
    // }

    // const searchStreet = (event) => {
    //     if(streets?.length){
    //         let query = event.query;
    //         let _filteredStreets = [];

    //         for(let i = 0; i < streets?.length; i++) {
    //             let street = streets[i];
    //             if (street.שם_רחוב.indexOf(query) === 0) {
    //                 _filteredStreets.push(street);
    //             }
    //         }
    //     setFilteredStreets(_filteredStreets);
    //     }
    // }

    useEffect(() => {
        if(studentSettings!=null){
            if(studentSettings.name != null)
                setName(studentSettings.name);
            if(studentSettings.grade != null)
                setGrade(studentSettings.grade);
            if(studentSettings.mail != null)
                setMail(studentSettings.mail);
            if(studentSettings.phone != null)
                setPhone(studentSettings.phone);
            if(studentSettings.id != null)
                setId(studentSettings.id);
            if(studentSettings.password != null)
                setPassword(studentSettings.password);
            setEdit(true);
            // setIsFirst(false);
        }
    }, [ studentSettings ])

    useEffect(()=>{
        console.log("Ruthi ::: objToData", objToData); 
    }, [objToData])

    useEffect(()=>{
        console.log("Ruthi ::: studentSettings", studentSettings); 
    }, [studentSettings])

    const accept = async () => {
        // if(isFirst){
            // await postDataFunc(`building`, objToData);
        //     debugger;
        // }           
        // else{
            const x = studentSettings;
            if(x.name!=objToData.name && objToData.name!=null)
                x.name=objToData.name;
            if(x.grade!=objToData.grade && objToData.grade!=null)
                x.grade=objToData.grade;
            if(x.mail!=objToData.mail && objToData.mail!=null)
                x.mail=objToData.mail;
            if(x.phone!=objToData.phone && objToData.phone!=null)
                x.phone=objToData.phone;
            if(x.id!=objToData.id && objToData.id!=null)
                x.id=objToData.id;
            if(x.password!=objToData.password&& objToData.password!=null)
                x.password=objToData.password;
            // if(x.bank_account!=objToData.bank_account)
            //     x.bank_account=objToData.bank_account;
            // if(x.branch_address!=objToData.branch_address)
            //     x.branch_address=objToData.branch_address;
            // if(x.branch_num!=objToData.branch_num && objToData.branch_num!=null)
            //     x.branch_num=objToData.branch_num;
            // if(x.account_owner_name!=objToData.account_owner_name && objToData.account_owner_name!=null)
            //     x.account_owner_name=objToData.account_owner_name;
            await updateDataFunc(`user/${JSON.parse(localStorage.getItem('user')).idstudent}`, x);
            console.log(x);
            localStorage.setItem("user",JSON.stringify(x))
            props.setUserId(x.idstudent)
            props.setPassword(x.password)
            // debugger;
        // }
        toast.current.show({ severity: 'info', summary: 'מאושר', detail: 'המידע נשמר בהצלחה', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'נדחה', detail: 'המידע לא נשמר', life: 3000 });
    };

    return (
        <>
        {
        // !paymentSettings?
        <div className="flex justify-content-center" style={{ padding: "5%" }}>
            <Card title="הגדרות פרופיל" style={{ width: "530px" }}>
                <div >
                <div className="flex flex-column gap-3">
                <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}> שם: </span>
                        <InputText 
                            readOnly={edit}
                            id="name" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                handleChange(e.target.value, "name")
                            }}
                            style={{width:"300px"}}
                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}> כיתה: </span>
                        <InputText 
                            readOnly={edit}
                            id="grade" 
                            value={grade}
                            onChange={(e) => {
                                setGrade(e.target.value)
                                handleChange(e.target.value, "grade")
                            }}
                            style={{width:"290px",direction:"rtl"}}
                        />
                    </span>
       
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}> מייל: </span>
                        <InputText 
                            readOnly={edit}
                            id="mail" 
                            value={mail}
                            onChange={(e) => {
                                setMail(e.target.value)
                                handleChange(e.target.value, "mail")
                            }}
                            style={{width:"300px",direction:"rtl"}}
                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}>טלפון: </span>
                        <InputNumber
                            readOnly={edit}
                            inputId="phone"
                            value={phone}
                            onValueChange={(e) => {
                                setPhone(e.target.value);
                                handleChange(e.target.value, "phone")
                            }}
                            useGrouping={false}
                            style={{width:"290px",direction:"rtl"}}

                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}>תעודת זהות: </span>
                        <InputNumber
                            readOnly={edit}
                            inputId="id"
                            value={id}
                            onValueChange={(e) => {
                                setId(e.target.value);
                                handleChange(e.target.value, "id")
                            }}
                            useGrouping={false}
                            style={{width:"250px",direction:"rtl"}}

                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" ,direction:"ltr"}}>סיסמה: </span>
                        <InputText 
                            readOnly={edit}
                            id="password" 
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                handleChange(e.target.value, "password")
                            }}
                            style={{width:"290px",direction:"rtl"}}

                        />
                    </span>
                    {/* <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מספר חשבון: </span>
                        <InputNumber
                            readOnly={edit}
                            inputId="withoutgrouping"
                            value={bankAccount}
                            onValueChange={(e) => {
                                setBankAccount(e.target.value);
                                handleChange(e.target.value, "bank_account")
                            }}
                            useGrouping={false}
                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>כתובת הסניף: </span>
                        <InputText 
                            readOnly={edit}
                            id="branchAddress" 
                            value={branchAddress}
                            onChange={(e) => {
                                setBranchAddress(e.target.value)
                                handleChange(e.target.value, "branch_address")
                            }}
                        />
                    </span>
                    <span>
                        <span style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>מספר הסניף: </span>
                        <InputNumber
                            readOnly={edit}
                            inputId="withoutgrouping"
                            value={branchNum}
                            onValueChange={(e) => {
                                setBranchNum(e.target.value);
                                handleChange(e.target.value, "branch_num")
                            }}
                            useGrouping={false}
                        />
                    </span> */}
                   
                </div></div><br />
                {
                    edit ?
                        <Button type="submit" label="עריכת הגדרות" className="mt-2" icon="pi pi-file-edit" style={{direction: "ltr"}} onClick={() => { setEdit(false); }} /> :
                        // !isFirst ?
                        <>
                        <Toast ref={toast} />
                        <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)}
                            message="האם הנך בטוח/ה שברצונך לשנות את ההגדרות" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                        <div>
                            <Button
                                ref={buttonEl}
                                onClick={() => {
                                    // console.log(objToData);
                                    setVisible(true);
                                }}
                                icon="pi pi-check-circle"
                                label="שמור"
                                style={{direction: "ltr"}}
                            />
                        </div>
                        </>
                        // :<></>
                        // <div>
                        // <Button
                        //     ref={buttonEl}
                        //     onClick={() => {
                        //         setPaymentSettings(true)
                        //     }}
                        //     icon="pi pi-check-circle"
                        //     label="להגדרות גביה"
                        //     style={{direction: "ltr"}}
                        // />
                        // </div>
                }      
            </Card> 
        </div>
        // :
        //     <PaymentSettings building={objToData}></PaymentSettings>
        }
        </>
    )
}

export default SetProfil;