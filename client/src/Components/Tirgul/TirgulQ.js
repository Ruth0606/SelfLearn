import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import useGetData from "../../Hooks/useGetData";



export default function TirgulQ(props) {
    // const { data, error, loading, refetch } = useGetData(
    //     `http://localhost:8000/question/${props.type}/${props.idlevel}`
    //   );

    
    console.log("props.categories", props.categories)
    console.log(props)
    const [selectedCategory, setSelectedCategory] = useState(props.categories[0])

    return (
        <div  >
            <div className="flex flex-column gap-3" style={{ marginRight: "7%",marginRight: "6%" }}>
                <i id="v"className="pi pi-check" style={{fontSize: "2rem",display:"none"}}></i>
                <i id="x"className="pi pi-times" style={{fontSize: "2rem",display:"none"}}></i>
                <span id="numq" style={{ marginTop: "3%",fontSize:"40px"}} >שאלה {props.num}:</span>
                {/* <br></br><br></br> */}
                <span id="quest" style={{ fontSize:"36px"}}>{props.quest.description} = </span>
                {props.categories.map((category) => {
                    return (
                        <div key={category.idanswer} className="flex align-items-center" style={{ "margin": "1%" }}>
                            <RadioButton inputId={category.idquestion} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.idanswer === category.idanswer} />
                            <label htmlFor={category.idanswer} className="ml-2">   {category.description}   </label>
                        </div>
                    );
                })}
            </div>
            <br></br>
        </div>
       
    );
}