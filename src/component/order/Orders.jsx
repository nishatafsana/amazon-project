import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../rewieItem/ReviewItem';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData()
    // delet btn click korle kono kicu delet korar jonno..
    const [cart,setCart]=useState(savedCart)
    // delet btn jonno event handler add
    const handleRemoveFromCart=(id)=>{
        // console.log(id);
        // btn akta delet kore onno gula rakar jonno filter korbo.
        const remaining=cart.filter(product=>product.id!==id)
        setCart(remaining)
        // page reloder dile ager info abr cole ashe aijonno removeFromeDb faedb modhe ja ase setar id dite hobe
        removeFromDb(id)
    }
    // console .log(savedCart);

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* loop kore protita jinis dekanu jonno */}
            {
             cart.map(product=><ReviewItem
             key={product.id}
             product={product}
             handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
            }

            </div>
            
            <div className="card-container">
                {/* cart ar modhe kicu nai tai empty aray */}
           {/* <Cart cart={[]}></Cart>   */}
               
             {/* cart gula dekanur jonno empty arry dile dekabe na se jonno akta cart k pathaite hobe.. */}
             <Cart cart={cart}></Cart>
            </div>
            

            
        </div>
    );
};

export default Orders;