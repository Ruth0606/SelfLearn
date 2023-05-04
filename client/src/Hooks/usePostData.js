import axios from 'axios';
import React, { useState, useEffect } from 'react';
async function usePostData(url,data) {

  const url1="http://localhost:8000/";
    try {  
      const response = await axios.post(`${url1}${url}`, data);
   //   console.log(response.data);
      return response.data;
    } catch (error) {
     // console.log(error);
    }
}
export default usePostData
