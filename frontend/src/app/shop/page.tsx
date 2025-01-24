"use client";

// shop shelf design (ask jonno)
// timer
// header (global implementation?)

import React from "react";

const ShopPage = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Postcard Background",
      price: 20,
      originalPrice: 40,
      image: "/postcard.png", // Replace with real images
      isOnSale: true,
    },
    {
      id: 2,
      name: "Home Background",
      price: 130,
      image: "/home-background.png", // Replace with real images
    },
    {
      id: 3,
      name: "Exclusive Stamp",
      price: 240,
      image: "/stamp.png", // Replace with real images
    },
    {
      id: 4,
      name: "Exclusive Badge",
      price: 130,
      image: "/badge.png", // Replace with real images
    },
    {
      id: 5,
      name: "Home Background",
      price: 130,
      image: "/wood-background.png", // Replace with real images
    },
  ];

  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Header */}
      <header className="text-center py-6">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--font-bio-rhyme)" }}
        >
          SHOP
        </h1>
        <p
          className="text-lg mt-2"
          style={{ fontFamily: "var(--font-bio-rhyme)" }}
        >
          REFRESHES IN 01:34
        </p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 pb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-transparent"
            style={{
              fontFamily: "var(--font-bio-rhyme)",
            }}
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md shadow-md w-48 h-32 object-cover"
              />
              {product.isOnSale && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  SALE!
                </div>
              )}
            </div>

            {/* Product Name */}
            <h2 className="text-xl font-bold mt-4 text-center">
              {product.name}
            </h2>

            {/* Product Price */}
            <div className="text-center mt-2">
              <span className="text-lg font-bold">{product.price} </span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm ml-2">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        className="text-center text-sm py-6"
        style={{ fontFamily: "var(--font-bio-rhyme)" }}
      >
        TRIPLEBARREL
      </footer>
    </div>
  );
};

export default ShopPage;
