"use client";

import { useUserAuth } from "../_utils/auth-context"; 
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect, useState } from "react";

/**
 * Page Component
 *
 * Renders the Shopping List page with:
 * - User authentication
 * - Cloud Firestore integration (load & add items)
 * - Meal ideas based on selected ingredients
 */
export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    async function loadItems() {
      if (!user) return;
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    newItem.id = id;
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedName);
  };

  if (!user) return <p>Please log in first.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl font-serif tracking-wide text-gray-900 mb-8 text-center">
        Shopping List
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="flex flex-col items-center w-full h-full">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex flex-col items-center w-full h-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

      <Link
        href="/"
        className="col-span-2 flex items-center justify-center p-6 rounded-lg shadow-md bg-white border border-gray-300 text-gray-800 text-xl font-medium hover:translate-y-[-2px] transition-transform duration-300 mt-6"
      >
        Back to Home
      </Link>
    </div>
  );
}
