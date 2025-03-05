import React from "react";

/**
 * Represents an item with a name, quantity, and category.
 * This class can be used for structured data handling if needed in the future.
 */
class Item {
  constructor(name, quantity, category) {
    this.name = name;
    this.quantity = quantity;
    this.category = category;
  }
}

/**
 * ItemComponent
 *
 * Displays an individual item in a styled card format.
 * Receives item details (name, quantity, category) as props.
 */
export function ItemComponent({ name, quantity, category }) {
  return (
    <li className="card flex flex-col items-start mb-4 p-4 rounded-lg shadow-md bg-[#b0202a]">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-sm text-gray-700">
        Buy <span className="font-semibold">{quantity}</span> in{" "}
        <span className="italic">{category}</span>
      </p>
    </li>
  );
}
