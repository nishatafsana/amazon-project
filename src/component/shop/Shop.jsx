import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
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
    // local storage a bosanur jonno..
    useEffect(()=>{
        // console.log(products);
        const storedCart=getShoppingCart();
        const savedCart=[];
        console.log(storedCart)
        // step 1 get id..
        for(const id in storedCart){
        //  console.log(id);
        // set 2 get the product by using id
        const addedProduct=products.find(product=>product.id===id);

        
        // step 3 get quintity using id..if condition jodi na dei tahole error kaye jai karon
        // quintity holo akta empty arry tai if diye condition check kora hoi.
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity
            console.log(addedProduct)
            // step 4 add the addedproduct to the saved cart..
            savedCart.push(addedProduct)
        }
       

        

        }
        // step 5.set the cart
        setCart(savedCart)
    },[products])
    // button ar result jano dekai se jonnno state declear korte hobe..
    const [cart,setCart]=useState([])
    


    // button ar jonno
    const handelAddToCart=(product)=>{
        // console.log(product)
        // state ar joono..
        const newCart=[...cart,product]
        setCart(newCart)
        // local storage ar rakar jonno
        addToDb(product.id)
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
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;