"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sort items based on sortBy
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category for the group view
  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Sort/Group Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            sortBy === "name" && !groupByCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        
        <button
          onClick={() => {
            setSortBy("category");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            sortBy === "category" && !groupByCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            groupByCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Items List */}
      <div>
        {groupByCategory ? (
          // Grouped View
          <div className="space-y-6">
            {sortedCategories.map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-xl font-bold text-gray-800 capitalize mb-3">
                  {category}
                </h2>
                <ul className="space-y-2">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <li key={item.id} className="bg-white rounded-lg p-3 border border-gray-200">
                        <h3 className="font-semibold text-gray-800 capitalize">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          Buy {item.quantity} in {item.category}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          // Regular Sorted View
          <ul className="space-y-3">
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}