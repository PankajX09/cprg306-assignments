'use client';

import useState from 'react';

export default function NewItem() {

  const [quantity, setQuantity] = useState(1);


  const increment = () => {
    setQuantity(prev => (prev < 20 ? prev + 1 : prev));
  };


  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow bg-white text-center">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 text-black rounded ${
            quantity === 1 ? 'bg-red-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-500'
          }`}
        >
          -
        </button>
        <span className="text-xl font-bold text-black">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 text-black rounded ${
            quantity === 20 ? 'bg-red-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-500'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}