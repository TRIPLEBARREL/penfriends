"use client";

import React from "react";

const ShopPage = () => {
  const dummyProducts = [
    { id: 1, name: "Product 1", price: "$20" },
    { id: 2, name: "Product 2", price: "$30" },
    { id: 3, name: "Product 3", price: "$40" },
  ];

  const categories = ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-lg text-gray-600">Discover our products</p>
      </header>

      {/* Categories */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="flex gap-4">
          {categories.map((category) => (
            <li key={category} className="cursor-pointer hover:text-blue-500">
              {category}
            </li>
          ))}
        </ul>
      </section>

      {/* Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
