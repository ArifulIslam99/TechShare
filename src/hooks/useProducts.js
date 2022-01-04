import { useEffect, useState } from "react";


   const  useProducts = () =>{

    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true)
    useEffect(()=>{
        setProductLoading(true)
        fetch('https://safe-fjord-60058.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        }).finally(()=>setProductLoading(false))
           
    },[])

    const [laptops, setLaptops] = useState([])
    useEffect(()=>{
        fetch('https://safe-fjord-60058.herokuapp.com/products/laptops')
        .then(res => res.json())
        .then(data => {
            setLaptops(data)
        })  
    },[])

    const [smartphones, setSmartphones] = useState([])
    useEffect(()=>{
        fetch('https://safe-fjord-60058.herokuapp.com/products/smartphones')
        .then(res => res.json())
        .then(data => {
           setSmartphones(data)
        })
           
    },[])

    const [smartWatches, setSmartWatches] = useState([])
    useEffect(()=>{
       
        fetch('https://safe-fjord-60058.herokuapp.com/products/smartwatches')
        .then(res => res.json())
        .then(data => {
            setSmartWatches(data)
        })
           
    },[])
    return {
        products,
        productLoading,
        laptops,
        smartWatches,
        smartphones,
        setProducts
    };

}

export default useProducts