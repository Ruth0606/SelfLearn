{data&&
    data.map((item,i)=>{
        // const s=item[a]
        return(
            <>
            {/* {console.log(s)} */}
        
            {/* {flag&& <h2>{s}</h2>} */}
            {/* <h2>חשבון</h2> */}
            
        {/* {item[b]!==data[i-1][b]&& */}
        {
        getDataFunc(`http://localhost:8000/question/test/getTestByIdSubject?idsubject=${item["level.subsubject.subject.idsubject"]}`)
            .then(
                (data1) => {
                    setData1(data1) 
                }
            )
        // &&
        // <><h1>מבחן סופי</h1>
        // <h2>{data1.mark}ציון</h2>
        // {setFlag(false)}
        // </>
        &&<>
        <h2>{data1}</h2>
        </>
        
        } 
        <h1>בוחן</h1>
        {/* <h2>{item[c]}בנושא</h2> */}
        <h2>{item.mark}ציון</h2>
        <h1>{item}</h1>
        </>
        )
    })}  