
import useAxios from 'axios-hooks'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

 const useGetData=(url)=> {
  const [{ data, loading, error }, refetch] = useAxios(url);
  console.log({url})
  useEffect(() => { console.log("error", error); }, [error]);

  return { data, loading, error, refetch }
}
export default useGetData





  
