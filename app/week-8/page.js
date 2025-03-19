"use client";

import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item"; // Import NewItem component
import MealIdeas from "./meal-ideas"; // Import MealIdeas component
import itemsData from "./items.json"; // Import initial items

/**
 * Page Component
 *
 * Renders the Shopping List page, which includes:
 * - A title
 * - A shopping list (ItemList component)
 * - A form to add new items (NewItem component)
 * - Meal suggestions based on selected ingredients (MealIdeas component)
 * - A navigation link back to the homepage
 */
export default function Page() {
  // Initialize state with the imported items.json
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to update the selected item and clean its name
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/[^a-zA-Z ]/g, ""); // Remove emojis & extra text
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      {/* Page Title Section */}
      <h1 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        Shopping List
      </h1>

      {/* Content Section: New Item Form and Shopping List */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Left Column: NewItem Form & Shopping List */}
        <div className="flex flex-col items-center w-full h-full">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right Column: Meal Ideas */}
        <div className="flex flex-col items-center w-full h-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

      {/* Navigation Section */}
      <Link
        href="/"
        className="col-span-2 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300 mt-6"
      >
        Back to Home
      </Link>
    </div>
  );
}
