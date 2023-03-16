import axios from 'axios';

export default async function useGetData(url,param){

    try {
        const response = await axios.get(`${url}/${param}`);
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
}
