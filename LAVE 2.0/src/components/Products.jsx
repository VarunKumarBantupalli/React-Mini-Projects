import React from 'react';

const Products = ({ data }) => {
    return (
        <div className="cards grid grid-cols-4 m-5">
            {data.map((item) => (


                <div key={item.uri} className="card">
                    <img src={item.image} alt={item.label} />
                    <h4>{item.label}</h4>
                    <h6>price- {Math.floor(Math.random() * 100) + 50}/-</h6> 
                    <button className='text-white my-2 p-2 rounded-2xl bg-green-600 hover:bg-slate-500'>add to cart</button>
                </div>

            ))}
        </div>
    );
}

export default Products;
