import { useEffect, useState } from "react";


   const  useProducts = () =>{

    const [products, setProducts] = useState([]);


    

    useEffect(()=>{
        let productSubscribe = true;
        fetch('https://safe-fjord-60058.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            if(productSubscribe)
            {
                setProducts(data)
            }
        })

        return () => {
            productSubscribe = false;
        }
           
    },[])

    const [laptops, setLaptops] = useState([])
    useEffect(()=>{

        let LaptopSubscribe = true;
        fetch('https://safe-fjord-60058.herokuapp.com/products/laptops')
        .then(res => res.json())
        .then(data => {
            if(LaptopSubscribe)
            {
                setLaptops(data)
            }
        })  

        return () => {
            LaptopSubscribe = false;
        }
    },[])

    const [smartphones, setSmartphones] = useState([])
    useEffect(()=>{
        let smartPhoneSubscribe = true;
        fetch('https://safe-fjord-60058.herokuapp.com/products/smartphones')
        .then(res => res.json())
        .then(data => {
            if(smartPhoneSubscribe)
            {
                setSmartphones(data)
            }
        })

        return () => {
            smartPhoneSubscribe = false;
        }
           
    },[])

    const [smartWatches, setSmartWatches] = useState([])
    useEffect(()=>{
        let smartWatchesSubscribe = true;
        fetch('https://safe-fjord-60058.herokuapp.com/products/smartwatches')
        .then(res => res.json())
        .then(data => {
            if(smartWatchesSubscribe)
            {
                setSmartWatches(data)
            }
        })

        return () => {
            smartWatchesSubscribe = false;
        }
           
    },[])
    return {
        products,
        laptops,
        smartWatches,
        smartphones,
        setProducts
    };

}

export default useProducts