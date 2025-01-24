"use client";

// global: header?
// shop: design, implement products and stickers, design timer and price
// stickers: can reuse stickers on letters for sale stickers here
// products: wait for real data

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
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-bio-rhyme)", // Matches the global font family
      }}
    >
      {/* Header */}
      <header className="text-center py-6">
        <h1
          className="text-5xl font-bold" // Consistent with Penfriends title size
          style={{ color: "#171717" }} // Matches foreground color
        >
          SHOP
        </h1>
        <p
          className="text-2xl mt-2" // Slightly larger than default text for emphasis
          style={{ color: "#171717" }} // Matches foreground color
        >
          REFRESHES IN 01:34
        </p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 pb-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
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
            <h2
              className="text-2xl font-bold mt-4 text-center"
              style={{ color: "#171717" }} // Matches foreground color
            >
              {product.name}
            </h2>

            {/* Product Price */}
            <div className="text-center mt-2">
              <span
                className="text-xl font-bold"
                style={{ color: "#171717" }} // Matches foreground color
              >
                {product.price}
              </span>
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
        className="text-center text-lg py-6"
        style={{ color: "#171717" }} // Matches foreground color
      >
        TRIPLEBARREL
      </footer>
    </div>
  );
};

export default ShopPage;
