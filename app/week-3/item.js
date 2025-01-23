import React from 'react';

class Item {
    constructor(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
}

export function ItemComponent({ name, quantity, category }) {
  return (
    <li className="p-4 bg-slate-900 text-white rounded-md shadow-md flex flex-col items-start">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-300">
        Buy <span className="font-semibold">{quantity}</span> in{' '}
        <span className="italic">{category}</span>
      </p>
    </li>
  );
}
