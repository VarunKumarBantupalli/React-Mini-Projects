import React from 'react'
import { PRODUCTS } from '../../productsData'
import Product from '../Product'


const Shop = () => {
  return (
    <div className='shop'>
      <center>
        <h1 className='text-4xl font-bold'>Shopholics Summer Sale is Back</h1>
        <div className="grid grid-cols-3 products">
          {PRODUCTS.map((product) => {
            return <Product key={product.id} product={product} />
          })}
          
        </div>
        
      </center>
    </div>
  )
}

export default Shop
