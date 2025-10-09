'use client';

import { useState } from 'react';

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);
  // sets a variable, setQuantity is a function that assigns a value to the variable quantity


  const increment = () => {
    setQuantity(prev => (prev < 20 ? prev + 1 : prev));
    //checks if the number is below 20, if it is, increase, if not, keep it as is
  };


  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
    //same as increment, but checking if its above 1, and if so, decrease it, if not, keep as is
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow bg-white text-center">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement} //calls the decrement function
          className={`px-4 py-2 text-black rounded ${
            quantity === 1 ? 'bg-red-400' : 'bg-green-500 hover:bg-green-500' 
            //if quantity is 1, button is red, if not, button is green
          }`}>
          -
        </button>
        <span className="text-xl font-bold text-black">{quantity}</span> //displays the current quantity
        <button
          onClick={increment} // calls the increment function
          className={`px-4 py-2 text-black rounded ${
            quantity === 20 ? 'bg-red-400' : 'bg-green-500 hover:bg-green-500'
            //same thing as the other button, but now it's checking if its 20 instead of 1
          }`}>
          +
        </button>
      </div>
    </div>
  );
}