import axios from 'axios';
import React, { useState, useEffect } from 'react';
async function usePostData(url,data) {
    try {  
      const response = await axios.post(url, data);
   //   console.log(response.data);
      return response.data;
    } catch (error) {
     // console.log(error);
    }
}
export default usePostData
