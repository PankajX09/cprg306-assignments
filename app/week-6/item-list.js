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
    <div>
      {/* Sort/Group Buttons - EXACTLY like screenshot */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
          }}
          className={`px-4 py-2 rounded font-medium ${
            sortBy === "name" && !groupByCategory
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-800 hover:bg-orange-200"
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
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-800 hover:bg-orange-200"
          }`}
        >
          Sort by Category
        </button>
        
        <button
          onClick={() => setGroupByCategory(true)}
          className={`px-4 py-2 rounded font-medium ${
            groupByCategory
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-800 hover:bg-orange-200"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Items List */}
      <div>
        {groupByCategory ? (
          // Grouped View - EXACTLY like screenshot
          <div className="space-y-4">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-white capitalize mb-2">
                  {category}
                </h2>
                <ul className="space-y-2 mb-4">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <li key={item.id} className="bg-slate-800 rounded p-3 border border-slate-700">
                        <h3 className="font-semibold text-white capitalize">{item.name}</h3>
                        <p className="text-slate-400 text-sm">
                          Buy {item.quantity} in {item.category}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          // Regular Sorted View - EXACTLY like screenshot
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