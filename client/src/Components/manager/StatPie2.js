import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useDataFunctions } from "../../Hooks/useDataFunctions";

export default function StatPie2() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const { getDataFunc } = useDataFunctions();

    useEffect(() => {
        getDataFunc(`question/test/getCountTestsforSubject`).then(
            (tests) => {
         const cnt=[],sub=[];
         tests.forEach(element => {
            if(element.count>0&&element["idsubject"]!=1){
                cnt.push(element.count);
                sub.push(element["subject.description"])
            }
         });

        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: sub,
            datasets: [
                {
                    data: cnt,
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--pink-500')

                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--pink-500')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
      
    }  )}, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        