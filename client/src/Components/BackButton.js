import React from 'react';
// import { ImArrowLeft2 } from "react-icons/im";
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (<>
  {/* <button onClick={handleBack}></button> */}
  
 <HiArrowSmallLeft style={{cursor: "pointer",fontSize:"40px",color:"black",zIndex:10,marginLeft:"1px"}} onClick={handleBack}/>
 {/* //position:"fixed", */}

{/* style={{position:"fixed", fontSize:"25px",color:"black",marginTop:"43%",left:"2%",zIndex:10}}  */}
</>  );
};

export default BackButton;
