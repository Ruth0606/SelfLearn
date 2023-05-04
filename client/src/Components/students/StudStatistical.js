
import React, { useState, useEffect,useContext } from 'react';
import { Chart } from 'primereact/chart';
import { useDataFunctions } from '../../Hooks/useDataFunctions'
import useGetData from '../../Hooks/useGetData'
import UserContext from "../user/UserContext";

export default function StudStatistical() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const [chartDataQ, setChartDataQ] = useState({});
    const [chartOptionsQ, setChartOptionsQ] = useState({});
    const { getDataFunc } = useDataFunctions();

    const user=JSON.parse(localStorage.getItem('user'))
    

    useEffect(() => {
        console.log(user);

        const idstudent=user.idstudent
        getDataFunc(`question/test/getSubjectsTestsByIdStudent?idstudent=${idstudent}`)
        .then((data1) => {
            let lables=[],marks=[]
            data1.length>0&&data1.forEach(element => {
            lables.push(element["subject.description"]) 

            marks.push(element["mark"])
        

        })
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: lables,
            datasets: [
                {
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: marks
                }
                // {
                //     label: 'Dataset 2',
                //     fill: false,
                //     borderColor: documentStyle.getPropertyValue('--green-500'),
                //     yAxisID: 'y1',
                //     tension: 0.4,
                //     data: [28, 48, 40, 19, 86, 27, 90]
                // }
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
                
            });
            
    


    }, []);


    useEffect(() => {
        const idstudent=user.idstudent
        getDataFunc(`question/test/getLevelTestsByIdStudent?idstudent=${idstudent}`)
        .then((data1) => {
            let lables=[],marks=[]
            data1.length>0&&data1.forEach(element => {
            lables.push(element["level.subsubject.description"]+" רמה "+ element["level.description"]) 

            marks.push(element["mark"])
        

        })
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: lables,
            datasets: [
                {
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: marks
                }
                // {
                //     label: 'Dataset 2',
                //     fill: false,
                //     borderColor: documentStyle.getPropertyValue('--green-500'),
                //     yAxisID: 'y1',
                //     tension: 0.4,
                //     data: [28, 48, 40, 19, 86, 27, 90]
                // }
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartDataQ(data);
        setChartOptionsQ(options);
                
            });
            
    


    }, []);

    return (
        <>
        <div className="card m-8">
            <h2>הציונים במבחנים שנבחנת</h2>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
        <div className="card m-8">
            <h2>הציונים בבחנים שנבחנת</h2>
            <Chart type="line" data={chartDataQ} options={chartOptionsQ} />
        </div>
        </>
    )
}
        