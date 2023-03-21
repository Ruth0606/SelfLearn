import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import useGetData from "../../Hooks/useGetData";



export default function TirgulQ(props) {
    // const { data, error, loading, refetch } = useGetData(
    //     `http://localhost:8000/question/${props.type}/${props.idlevel}`
    //   );

    
    console.log("props.categories", props.categories)
    console.log(props)
    const [selectedCategory, setSelectedCategory] = useState(props.categories[0]);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3" >
                <span id="numq"style={{ "marginRight": "2%" }}>שאלה {props.num}:</span><br></br><br></br>
                <span id="quest" style={{ "margin": "2%" }}>{props.quest.description} = </span>
                {props.categories.map((category) => {
                    return (
                        <div key={category.idanswer} className="flex align-items-center" style={{ "margin": "3%" }}>
                            <RadioButton inputId={category.idquestion} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.idanswer === category.idanswer} />
                            <label htmlFor={category.idanswer} className="ml-2">   {category.description}   </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}