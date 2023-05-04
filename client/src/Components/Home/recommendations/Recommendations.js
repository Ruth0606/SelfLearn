import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';
 import React, { useState, useEffect } from 'react';

export default function Recommendations(props) {


       


    // const [products, setProducts] = useState([]);
    const products = [
        {
            name:' אני מאד נהנת'
        },
        {
            name:' אני מאד שמחה'
        },
        {
            name:' אני מאד עצובה'
        },
        {
            name:' אני מאד חייכנית'
        },
        {
            name:' אני מאד עצבנית'
        },
        {
            name:' אני מאד מאושרת'
        },
        {
            name:' אני מאד אלופה'
        },
        {
            name:' אני מאד בוכה'
        },
        {
            name:' אני מאד רוקדת'
        }
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
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div>
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

        <div className="bg-yellow-500 border-yellow-500 border-top-2  border-bottom-2 pr-8 pl-8 p-8">

  
        <div className="card">
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} style={{ direction: "ltr"}}/>
        </div>
        {/* hgsa */}


        
        </div>
    </>
    )
}

