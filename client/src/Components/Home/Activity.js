import "../styles/home.css"
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function Activity() {
        const events = [
        { status: 'כניסה למערכת', date: '15/10/2020 10:30', icon: 'pi pi-sign-in', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'בחירת מקצוע חדש', date: '15/10/2020 14:00', icon: 'pi pi-search', color: '#673AB7' },
        { status: 'נסיגה יזומה', date: '15/10/2020 16:15', icon: 'pi pi-replay', color: '#FF9800' },
        { status: 'התראות', date: '16/10/2020 10:00', icon: 'pi pi-bell', color: '#607D8B' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            // title={item.status}
            <Card  subTitle={item.date} className="h-10rem w-11rem shadow-none justify-content-start margin-top: 0rem;" >
                <p style={{direction:"ltr"}}>{item.status}</p>
                {/* { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={50} className="shadow-1" />} */}
                
                <Button label="Read more" className="p-button-text" style={{direction:"ltr",padding: "3%",margin: "5%"}}></Button>
            </Card>
        );
    };
        
    return (
        <div className="card">
            <Timeline value={events}  className="customized-timeline ltr " marker={customizedMarker} content={customizedContent} style={{direction: 'rtl'}}/>
        </div>
    )
}