import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import useAxios from 'axios-hooks'
export default async function useGetData(url)
{

  // const [{ data, loading, error }, refetch] = useAxios(url);
  // useEffect(() => { console.log("error", error); }, [error]);
  // return { data, loading, error, refetch }
  // const [{ data, loading, error }, refetch] = useAxios(
  //   `${url}/${param}`)
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}
