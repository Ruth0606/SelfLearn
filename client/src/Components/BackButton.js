import React from 'react';
// import { ImArrowLeft2 } from "react-icons/im";
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (<>
  {/* <button onClick={handleBack}></button> */}
  
 <HiArrowSmallLeft style={{cursor: "pointer",position:"fixed",fontSize:"40px",color:"black",zIndex:10,left:"2%"}} onClick={handleBack}/>

{/* style={{position:"fixed", fontSize:"25px",color:"black",marginTop:"43%",left:"2%",zIndex:10}}  */}
</>  );
};

export default BackButton;
