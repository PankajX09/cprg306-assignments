"use client";
 import { useState } from "react";

 export default function ItemList({ items = [] }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div>
      <div className="flex gap-3 mb-6 ml-10">
        <button
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded font-medium ${
            sortBy === "name" && !groupByCategory
              ? "px-3 py-1 rounded text-sm font-large bg-amber-400 text-white"
              : "px-3 py-1 rounded text-sm font-large text-white hover:text-white bg-gray-500"
          }`}
        >
          Sort by
          <br></br>Name
        </button>
        
        <button
          onClick={() => {
            setSortBy("category");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded font-medium ${
            sortBy === "category" && !groupByCategory
              ? "px-3 py-1 rounded text-sm font-medium bg-amber-400 text-white"
              : "px-3 py-1 rounded text-sm font-medium text-white hover:text-white bg-gray-500"
          }`}
        >
          Sort by 
          <br></br>Category
        </button>
        
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 rounded font-medium ${
            groupByCategory
              ? "px-3 py-1 rounded text-sm font-medium bg-amber-400 text-white"
              : "px-3 py-1 rounded text-sm font-medium text-white hover:text-white bg-gray-500"
          }`}
        >
          Group by 
          <br></br>Category
        </button>
      </div>

      <div>
        {groupByCategory ? (
          <div className="space-y-6">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h2 className="text-lg font-semibold text-white mb-2 capitalize">
                  {category}
                </h2>
                <ul className="space-y-3 mb-6">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <li key={item.id} className="bg-white rounded p-4 border border-white">
                        <h3 className="font-bold text-black text-lg mb-1">{item.name}</h3>
                        <p className="text-black">
                          Buy {item.quantity} in {item.category}
                        </p>
                      </li>
                    ))}
                </ul>
                <hr className="border-white my-4" />
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-3">
            {sortedItems.map((item) => (
              <li key={item.id} className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400">
                  Buy {item.quantity} in {item.category}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}