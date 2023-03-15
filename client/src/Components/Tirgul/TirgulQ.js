import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function TirgulQ(props) {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        // { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3" >
            <span style={{"marginRight":"2%" }}>שאלה {props.num}:</span><br></br><br></br>
            <span style={{"margin":"2%" }}>2+2= </span>
                {categories.map((category) => {
                    return (
                        
                        <div key={category.key} className="flex align-items-center"  style={{"margin":"3%" }}>
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}