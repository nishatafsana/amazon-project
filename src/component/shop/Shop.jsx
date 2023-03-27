import React, { useEffect, useState } from 'react';
import Products from '../product/Products';
import'./Shop.css';

const Shop = () => {
    // step:2.load the data
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    // button ar result jano dekai se jonnno state declear korte hobe..
    const [cart,setCart]=useState([])
    


    // button ar jonno
    const handelAddToCart=(product)=>{
        // console.log(product)
        // state ar joono..
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        // step:1..akta div ar vitor duita div diye cls dici jate style kora jai..
        <div className='shop-container'>
           <div className="products-container">
            {/* step 3:array of object set korar por dekenur jonno lenngth dawae hpyache.*/}
            {
                products.map(product=><Products
                     key={product.id}
                  product={product}
                  handelAddToCart={handelAddToCart}>
                   
                </Products>)
            }
            </div> 
            <div className="card-container">
                <h4>order summary</h4>
                <p>Selected item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;