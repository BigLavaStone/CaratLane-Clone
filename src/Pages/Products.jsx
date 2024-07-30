import React, { useEffect, useState, } from "react";
import ProductCard from '../Components/Card'

function Products() {
    const [data1, setData] = useState([]);
    async function getData() {
        let res = await fetch(`http://localhost:8080/product_det`);
        let fetchedData = await res.json();
        setData(fetchedData.data);
        console.log(fetchedData);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {data1s.map((el)=>{
                    <ProductCard 
                    imgSrc= {el.img[0]}
                    price= {el.price}
                    title= {el.title}
                    />
                })}
        </div>
    )
}

export default Products