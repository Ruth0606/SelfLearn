import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import useGetData from "../../Hooks/useGetData";



export default function TirgulQ(props) {
    // const { data, error, loading, refetch } = useGetData(
    //     `http://localhost:8000/question/${props.type}/${props.idlevel}`
    //   );
    
    // const categories = [
    //     { name: 'Accounting', key: 'A' },
    //     { name: 'Marketing', key: 'M' },
    //     { name: 'Production', key: 'P' },
    //     // { name: 'Research', key: 'R' }
    // ];
    const [selectedCategory, setSelectedCategory] = useState(props.categories[1]);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3" >
            <span style={{"marginRight":"2%" }}>שאלה {props.num}:</span><br></br><br></br>
            <span style={{"margin":"2%" }}>{props.quest.description}= </span>
                {props.categories.map((category) => {
                    return (
                        
                        <div key={category.idquestion} className="flex align-items-center"  style={{"margin":"3%" }}>
                            <RadioButton inputId={category.idquestion} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.idquestion === category.idquestion} />
                            <label htmlFor={category.idquestion} className="ml-2">{category.description}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}