import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../productsData";
import { CartItem } from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart h-screen flex flex-col">
      <div className="py-4">
        <center>
          <h1 className="text-4xl font-bold">Your Cart Items</h1>
        </center>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <center>
        <div className="flex flex-wrap justify-center h-[300px] w-[200px] ">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
        </center>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout bg-black p-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-white">Subtotal: ${totalAmount}</p>
              <div>
                <button 
                  className="bg-blue-500 m-2 p-2 rounded-full text-black font-bold hover:bg-slate-500"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </button>
                <button 
                  className="bg-blue-500 m-2 p-2 rounded-full text-black font-bold hover:bg-slate-500"
                  onClick={() => {
                    checkout();
                 
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Your Shopping Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
