"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity(prev => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
              <div className="flex items-center justify-between border border-gray-300 rounded-lg p-1">
                <button
                  type="button"
                  onClick={decrement}
                  className={`px-4 py-2 rounded ${
                    quantity === 1 ? 'bg-red-400' : 'bg-blue-500 hover:bg-blue-600 text-black'
                  }`}
                >
                  -
                </button>
                <span className="text-xl font-bold mx-4 text-black">{quantity}</span>
                <button
                  type="button"
                  onClick={increment}
                  className={`px-4 py-2 rounded ${
                    quantity === 20 ? 'bg-red-400' : 'bg-blue-500 hover:bg-blue-600 text-black'
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex-1">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-black p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}