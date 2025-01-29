"use client";

import React from "react";

const ShopPage = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Hyundai i30N",
      price: 45,
      originalPrice: 40,
      image: "/product1.png", // Replace with real images
      isOnSale: true,
    },
    {
      id: 2,
      name: "Lexus IS350 Sport",
      price: 30,
      image: "/product2.png", // Replace with real images
    },
    {
      id: 3,
      name: "Volkswagen GTI mk6",
      price: 65,
      image: "/product3.jpeg", // Replace with real images
    },
    {
      id: 4,
      name: "Mustang GT",
      price: 60,
      image: "/product4.jpeg", // Replace with real images
    },
  ];

  return (
    <div
      className="min-h-screen" // pg takes at least full view port height
      style={{
        fontFamily: "var(--font-bio-rhyme)",
      }}
    >
      {/* Header */}
      <header className="text-center py-10">
        <h1
          className="font-bold sm:text-1.5xl lg:text-2xl" // Consistent with Penfriends title size
          style={{ color: "#171717" }} // Matches foreground color
        >
          SHOP
        </h1>
        <p
          className="font-bold sm:text-1xl lg:text-1.5xl mt-2" // Slightly larger than default text for emphasis
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
                className="rounded-md shadow-md w-300 h-30 object-cover z50"
              />
              {product.isOnSale && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  SALE!
                </div>
              )}
            </div>

            {/* Shelf */}
            <img
              src="/shelf.png"
              alt="shelf image"
              className="w-400 h-40 z30"
            />

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
