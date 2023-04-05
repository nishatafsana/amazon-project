import React from 'react';
import"./Review.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id,img,name,quantity,price}=product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className="review-details">
            <p className='product-tittle'>{name}</p>
            <p>price:<span className='orange-text'>${price}</span></p>
            <p>order quintity:<span className='orange-text'>{quantity}</span></p>
          
           </div>
          <button onClick={()=>handleRemoveFromCart(id)} className='btn'>
          <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            
        </div>
    );
};

export default ReviewItem;