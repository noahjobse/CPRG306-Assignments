"use client";

import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [error, setError] = useState("");

  const MAX_QUANTITY = 20;
  const MAX_NAME_LENGTH = 50;

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(MAX_QUANTITY, prev + 1));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(Math.min(MAX_QUANTITY, Math.max(1, value)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let trimmedName = itemName.trim();

    if (!trimmedName) {
      setError("Item name cannot be empty.");
      return;
    }

    if (!/[a-zA-Z0-9]/.test(trimmedName)) {
      setError("Item name must contain at least one letter or number.");
      return;
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
      setError(`Item name cannot exceed ${MAX_NAME_LENGTH} characters.`);
      return;
    }

    trimmedName = trimmedName.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

    if (!/[a-zA-Z]/.test(trimmedName)) {
      setError("Item name must include at least one letter.");
      return;
    }

    setError("");

    // Create a new item object
    const newItem = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      name: trimmedName,
      quantity,
      category,
    };

    // Pass the new item to the parent component
    onAddItem(newItem);

    // Reset form fields
    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="mx-auto my-8 max-w-md p-6 rounded-lg shadow-md bg-[#aeddff]">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Add a New Item
      </h1>
      <p className="text-center text-gray-700 mb-4">
        Fill out the form below to add a new item.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-gray-800"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            onClick={handleDecrement}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 p-2 border border-gray-300 rounded-md text-center text-black"
          />
          <button
            type="button"
            onClick={handleIncrement}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
          >
            +
          </button>
          <div>
            <label className="text-black font-medium mb-1">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            >
              {[
                "Produce",
                "Dairy",
                "Bakery",
                "Meat",
                "Frozen Foods",
                "Canned Goods",
                "Dry Goods",
                "Beverages",
                "Snacks",
                "Household",
                "Other",
              ].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#8bc2f9] text-gray-800 font-semibold rounded-md hover:bg-[#89B4E7] transition"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
