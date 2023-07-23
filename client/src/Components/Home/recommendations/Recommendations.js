import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';
import React, { useState, useEffect } from 'react';
import quote from "../../../img/quote.png"
export default function Recommendations(props) {

// 
    //    d


    // const [products, setProducts] = useState([]);
    const products = [
        {
            name:<p>               
            הבת שלי מתרגלת הרבה באתר הנפלא הזה 
            {<br></br>}  
            והרמה הלימודית שלה משתפרת מיום ליום
            {<br></br>}  
            !!
            אני ממליצה לכל אחד
            {<br></br>}
            גילה ח. בית שמש
        </p>
        },
        {
            name:<p> 
            הבת שלי לומדת כל יום והיא מצליחה בכל המבחנים 
                {<br></br>}  
                חנה נ. ירושלים            
            </p>
        },
        {
            name:<p> 
            הבת שלי לומדת כל יום והיא מצליחה בכל המבחנים 
                {<br></br>}  
                חנה נ. ירושלים            
            </p>
        },
        {
            name:<p>      
                !!         
           באתר הזה כל לימוד הופך לחויה
           {<br></br>}  
                יפה שטרן בני ברק
        </p>
        },
        // {
        //     name:<p>               
          
        // </p>
        // },
        {
            name:<p>               
           מאז שהכרתי את האתר
           {<br></br>} 
           אני לא צריכה ללמוד עם הבת שלי למבחנים
           {<br></br>} 
                         נעמה ר. אשדוד
        </p>
        },

    ];


    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };



    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const productTemplate = (product) => {
        return (
            <div className="surface-border border-round m-2 text-center py-5 px-3" >
                <div>
                  <img src={quote} alt="quote" width={"10%"} height={"10%"}/>
                    <h4 className="mb-1">{product.name}</h4>
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                    {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        {/* {p} */}
                        {/* <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" /> */}
                    </div>
                </div>
            </div>
        );
    };

    return (<>

        <div className="bg-yellow-500 border-yellow-500 border-top-2  border-bottom-2 pr-8 pl-8 p-8  ">
        {/* <img src={quote} alt="quote" width={"8%"} height={"8%"}/> */}
  
        <div className="card flex justify-content-center">
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel w-6 justify-self-center" circular
            autoplayInterval={3000} itemTemplate={productTemplate} style={{ direction: "ltr"}}/>
        </div>
        {/* hgsa */}


        
        </div>
    </>
    )
}

