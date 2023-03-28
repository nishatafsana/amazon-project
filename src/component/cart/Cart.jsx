import React from 'react';
import'./Cart.css';

const Cart = ({cart}) => {
    // const cart=props.cart;option 1 
    // const {cart}=props; option 2
    // console.log(cart);
    // protibar man baranur jonno..
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price;
        totalShipping=totalShipping+product.shipping
    }
// tax ar jonno
     const tax=totalPrice*7/100
    //  grand total ar jonno..sobgula jug korte hobe
    const grandTotal=totalPrice+totalShipping+tax


//    cart ar summy jonno alada alada vabe sajanu houache
    return (
        <div className='cart'>
              <h4>order summary</h4>
                <p>Selected item:{cart.length}</p>
                <p>Total price:${totalPrice}</p>
                <p>Total shipping cart:${totalShipping}</p>
                <p>Text:${tax.toFixed(0)}</p>
                <h6>Grand total:{grandTotal.toFixed(0)}</h6>
        </div>
    );
};

export default Cart;