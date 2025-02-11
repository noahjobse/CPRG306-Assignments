"use client";

import { useState } from "react";

/**
 * NewItem Component
 *
 * Allows users to add a new item with a validated name and quantity.
 *
 * Features:
 * - Name validation: Prevents empty, special-character-only, or overly long names.
 * - Quantity control: Allows increasing/decreasing within the range of 1-20.
 * - Form handling with error messages.
 */
const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const MAX_QUANTITY = 20;
  const MAX_NAME_LENGTH = 50;

  /**
   * Increases the quantity, ensuring it does not exceed the maximum limit.
   */
  const handleIncrement = () => {
    setQuantity((prev) => Math.min(MAX_QUANTITY, prev + 1));
  };

  /**
   * Decreases the quantity, ensuring it does not go below 1.
   */
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  /**
   * Handles changes in the quantity input field.
   * Ensures the value stays within the valid range.
   */
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(Math.min(MAX_QUANTITY, Math.max(1, value)));
  };

  /**
   * Validates the item name and handles form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    let trimmedName = itemName.trim();

    // Validation: Ensure name is not empty
    if (!trimmedName) {
      setError("Item name cannot be empty.");
      return;
    }

    // Validation: Ensure name contains at least one letter or number
    if (!/[a-zA-Z0-9]/.test(trimmedName)) {
      setError("Item name must contain at least one letter or number.");
      return;
    }

    // Validation: Ensure name does not exceed the maximum length
    if (trimmedName.length > MAX_NAME_LENGTH) {
      setError(`Item name cannot exceed ${MAX_NAME_LENGTH} characters.`);
      return;
    }

    // Clean up name: Remove leading and trailing special characters
    trimmedName = trimmedName.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

    // Validation: Ensure name includes at least one letter
    if (!/[a-zA-Z]/.test(trimmedName)) {
      setError("Item name must include at least one letter.");
      return;
    }

    setError("");
    setItemName(trimmedName);
    alert(`Item added: ${trimmedName} (Quantity: ${quantity})`);
  };

  return (
    <div className="mx-auto my-8 max-w-md p-6 rounded-lg shadow-md bg-[#aeddff]">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Add a New Item
      </h1>
      <p className="text-center text-gray-700 mb-4">
        Fill out the form below to add a new item.
      </p>

      {/* Item Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Item Name Input */}
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-gray-800"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Quantity Controls */}
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-[#8bc2f9] text-gray-800 font-semibold rounded-md hover:bg-[#89B4E7] transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
