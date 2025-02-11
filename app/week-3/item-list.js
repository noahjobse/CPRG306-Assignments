import React from "react";
import { ItemComponent } from "./item";

/**
 * ItemList Component
 *
 * Renders a list of grocery items with their name, quantity, and category.
 * Uses the ItemComponent to display each item.
 */

// Define the list of grocery items
const items = [
  { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
  { name: "bread 🍞", quantity: 2, category: "bakery" },
  { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
  { name: "bananas 🍌", quantity: 6, category: "produce" },
  { name: "broccoli 🥦", quantity: 3, category: "produce" },
  { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
  { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
  { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
  { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
  { name: "paper towels, 6 pack", quantity: 1, category: "household" },
  { name: "dish soap 🍽️", quantity: 1, category: "household" },
  { name: "hand soap 🧼", quantity: 4, category: "household" },
];

/**
 * Renders the list of items using the ItemComponent.
 * Each item is mapped to a separate list element.
 */
export default function ItemList() {
  return (
    <ul className="list-none space-y-4 p-4 max-w-md mx-auto">
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
