import React from 'react';
import'./Products.css'

const Products = (props) => {
    const{img,name,seller,ratings,price}=props.product
    const handelAddToCart=props.handelAddToCart
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6> 
          <p>price:${price}</p>
          <p>Manufucturer:{seller}</p>
          <p>Rating:{ratings}</p>
          </div>
          <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Products;