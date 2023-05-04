import axios from 'axios';

export const useDataFunctions =  () => {
    
const url1="http://localhost:8000/";
     const getDataFunc = async (url) => {
    console.log( {url});
    try {
        const response = await axios.get(`${url1}${url}`);
     //   console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
const postDataFunc = async (url,data) => {
    try {  
        const response = await axios.post(`${url1}${url}`, data);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}
const updateDataFunc = async (url,  body,params,) => {
    try {
        console.log(url);
        const res = await axios.put(`${url1}${url}`, body);
        console.log(res);
        return res
    }
    catch (err) {
        console.error(`error ${err}`);
    }
};

const deleteDataFunc = async (url,params) => {
    if(params==null){
        params='';
    }
    try {
        console.log(url);
        const res = await axios.delete(`${url1}${url}/${params}`);
        console.log(res);
        return res
    }
    catch (err) {
        console.error(`error ${err}`);
    }
};

return { getDataFunc, postDataFunc, updateDataFunc, deleteDataFunc }
}


