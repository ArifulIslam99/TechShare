import { useEffect, useState } from "react";


const useProducts = () =>{

    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true)
    useEffect(()=>{
        setProductLoading(true)
        fetch('https://safe-fjord-60058.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setProductLoading(false)
        })
    } , [])
   
    const smartphone = products.filter(pr => pr.catagory==='SmartPhone')
    const laptops = products.filter(pr => pr.catagory==='Laptop')
    const smartwatch = products.filter(pr => pr.catagory==='SmartWatch')
    return {
        
        products,
        productLoading,
        smartphone,
        laptops,
        smartwatch
    };

}

export default useProducts