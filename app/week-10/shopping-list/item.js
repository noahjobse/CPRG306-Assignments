import React from "react";

/**
 * ItemComponent
 * Displays an individual item in a styled card format.
 * Calls `onSelect` when clicked, passing the item's name.
 */
export const ItemComponent = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="card flex flex-col items-start mb-4 p-4 rounded-lg shadow-md 
                 bg-[#2267a2] cursor-pointer hover:bg-[#D6D6D6] transition-all duration-200"
      onClick={() => onSelect(name)} // Triggers parent function when clicked
    >
      <h2 className="text-2xl font-extrabold mb-2 text-gray-800">{name}</h2>
      <p className="text-lg text-gray-800">
        Buy <span className="font-bold">{quantity}</span> in{" "}
        <span className="italic">{category}</span>
      </p>
    </li>
  );
};
