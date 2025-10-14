"use client";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...itemsData].sort((a, b) => {
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
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded font-medium ${
            sortBy === "name" && !groupByCategory
              ? "bg-amber-400 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Sort by Name
        </button>
        
        <button
          onClick={() => {
            setSortBy("category");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded font-medium ${
            sortBy === "category" && !groupByCategory
              ? "bg-amber-400 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Sort by Category
        </button>
        
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 rounded font-medium ${
            groupByCategory
              ? "bg-amber-400 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Group by Category
        </button>
      </div>

      <div>
        {groupByCategory ? (
          <div className="space-y-6">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-white mb-3 capitalize">
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