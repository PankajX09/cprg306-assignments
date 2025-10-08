'use client'

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };

        console.log("New Item:", item);
        alert("Added item: \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}");

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form
            onSubmit = {handleSubmit}
            className = "max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4 mt-8"
        >
            <h2 className = "text-2xl font-semibold text-gray-800 text-center" >
                Add a new item
            </h2>
            <div>
                <label className = "block text-gray-700 mb-1">Item name</label>
                <input
                    type = "text"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    required
                    placeholder = "Enter item name"
                    className = "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"

                    />
            </div>

            <div>
                <label className = "block text-gray-700 mb-1">Quantity</label>
                <input
                    type = "number"
                    min = "1"
                    value = {quantity}
                    onChange = {(e) => setQuantity(e.target.value)}
                    required
                    className = "w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            {/* I stopped here, add new code here and then delete the comment - Kevin */}

        </form>
    )
}