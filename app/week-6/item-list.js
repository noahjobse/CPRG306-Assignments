"use client";

import React from "react";
import { ItemComponent } from "./item";
import { useState } from "react";
import items from "./items.json";

/**
 * Renders the list of items using the ItemComponent.
 * Each item is mapped to a separate list element.
 */
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  function handleClick(sortType) {
    setSortBy(sortType);
  }

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      {/* ✅ Updated button styling to show active sorting */}
      <div className="flex justify-end p-4">
        <button
          className={`mr-2 p-2 rounded ${
            sortBy === "name" ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
          onClick={() => handleClick("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 rounded ${
            sortBy === "category" ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
          onClick={() => handleClick("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="list-none space-y-4 p-4 max-w-md mx-auto">
        {sortedItems.map((item) => (
          <ItemComponent
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
