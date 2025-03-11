"use client";

import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item"; // Import NewItem component
import itemsData from "./items.json"; // Import initial items


/**
 * Page Component
 *
 * Renders the Week 3 Assignments page, which includes:
 * - A title
 * - A shopping list (ItemList component)
 * - A navigation link back to the homepage
 */
export default function Page() {
  // Initialize state with the imported items.json
  const [items, setItems] = useState(itemsData);

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      {/* Page Title Section */}
      <h1 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        Shopping List
      </h1>

      {/* Content Section: New Item Form and Shopping List */}
      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {/* NewItem Form */}
        <NewItem onAddItem={handleAddItem} />

        {/* Item List */}
        <ItemList items={items} />

        {/* Navigation Section */}
        <Link
          href="/"
          className="col-span-1 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
