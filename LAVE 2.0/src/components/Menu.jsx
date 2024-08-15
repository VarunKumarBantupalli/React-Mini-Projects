import React from 'react'

const Menu = ({ data }) => {
    return (
        
            <div className='flex flex-col m-5'>

                {data.map((data) =>
                (
                    <div key={data.id}>
                        <div className="card">
                            <img src={data.image} alt={data.name} />
                            <h4>{data.name}</h4>
                            <h6>price- {data.price}/-</h6>
                            <a href="#">add to cart</a>
                        </div>
                    </div>
                )
                )
                }

            </div>
        
    )
}

export default Menu
