import React from "react";
import TirgulQ from "../Tirgul/TirgulQ";

export default function Test() {
    var k=[1,2,3,4,5,6,7,8,9,10]


    async function fetchData() {
        useGetData('https://jsonplaceholder.typicode.com/posts',3)
      }
      
    //   useEffect(() => {
    //     fetchData();
    //   }, []);
      
    async function postData() {
        try {
          const data = {
            title: 'foo',
            body: 'bar',
            userId: 1
          };
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      

    return (
    <div>
    <h1>מבחן</h1>
    {
    k.map((val)=>{return (<TirgulQ num={val} ></TirgulQ>)} )
    }
    </div>
    )
}