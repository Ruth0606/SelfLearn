import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";

export default function BasicEditor(props) {
    const [text, setText] = useState('');
    useEffect(() => {
         props.func(text)
      }, [text]);
    return (
        <div className="card mx-8 rtl">
            <Editor value={text} onTextChange={(e) =>{
                setText(e.textValue)
                } } style={{ height:'250px',direction:"rtl"}}/>
        </div>
    )
}

// justify-content-center