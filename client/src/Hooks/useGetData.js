
import useAxios from 'axios-hooks'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

 const useGetData=(url)=> {
  const url1="http://localhost:8000/";
  const [{ data, loading, error }, refetch] = useAxios(`${url1}${url}`);
  console.log({url})
  useEffect(() => { console.log("error", error); }, [error]);

  return { data, loading, error, refetch }
}
export default useGetData





  
