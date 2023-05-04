import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import useGetData from "../../Hooks/useGetData";


export default function TirgulQ(props) {
    // const { data, error, loading, refetch } = useGetData(
    //     `question/${props.type}/${props.idlevel}`
    //   );


    console.log(props.flag)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const a = props.func2(props.num - 1);
    props.func(props.num - 1, selectedCategory)
    return (
        <div>
          

    
                 <div className="flex flex-column gap-3 mr-0" >
                {props.flag == "block" && props.check == 'v' && <i id="v" className="pi pi-check" style={{ fontSize: "2rem", display: props.flag, color: "orange" }}></i>
                }
                {props.flag == "block" && props.check == 'x' && <i id="x" className="pi pi-times" style={{ fontSize: "2rem", display: props.flag, color: "orange" }}></i>
                }             
                  <span id="numq" style={{  fontSize: "40px" }} >שאלה {props.num}:</span>
                <span id="quest" style={{ fontSize: "36px" }}>{props.quest.description} : </span>
                {props.categories.map((category) => {
                    return (
                        <div key={category.idanswer} className="flex align-items-center" style={{ "margin": "1%" }}>
                            <RadioButton inputId={category.idquestion} name="category" value={category} onChange={(e) => { setSelectedCategory(e.value); props.func(props.num - 1, e.value) }} checked={selectedCategory?.idanswer === category.idanswer} />
                            <label htmlFor={category.idanswer} className="ml-2">   {category.description}   </label>
                        </div>
                    );
                })
                }
               
            </div>
            <br></br>
        </div>

    );
}