import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';



const Product = ({product}) => {
    const {id , productName , price  , productImage} = product ;
    const {addToCart}  = useContext(ShopContext)
 
  return (
    
    <div className='product'>
      <img className='h-[300px] w-[200px]' src={productImage} alt="" />
      <div>
        <p>{productName}</p>
        <span>{price}$</span>      
      </div>
      <button onClick={() => addToCart(id)} className="btn bg-blue-500 p-2 m-2 rounded-xl text-black hover:bg-slate-500">Add to Cart</button>
    </div>
  )
}

export default Product
