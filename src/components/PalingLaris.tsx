"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { name: "Kapal Selam + Lenjer", price: "Rp. 15.000", img: "/img/slam.png" },
  { name: "Es Teh", price: "Rp. 5.000", img: "/img/es teh.png" },
];

export default function PalingLaris() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = products.slice(startIndex, startIndex + 2);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(products.length - 2, prev + 1));
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-2xl mb-5 text-gray-800 font-bold">Paling Laris</h2>
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="bg-orange-500 text-white text-xl border-none rounded-full w-10 h-10 cursor-pointer hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0 flex items-center justify-center"
        >
          ❮
        </button>

        {visibleProducts.map((product) => (
          <div
            key={product.name}
            className="bg-white p-2.5 rounded-lg shadow text-center w-[400px]"
          >
            <div className="relative w-full h-[250px]">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="font-bold mt-2.5">{product.name}</p>
            <span className="inline-block bg-orange-600 text-white px-2.5 py-1 rounded text-sm mt-1">
              {product.price}
            </span>
            <button className="block w-full bg-orange-600 text-white py-2 border-none rounded mt-2.5 cursor-pointer font-bold hover:bg-orange-700 transition-colors">
              Order Now
            </button>
          </div>
        ))}

        <button
          onClick={handleNext}
          disabled={startIndex >= products.length - 2}
          className="bg-orange-500 text-white text-xl border-none rounded-full w-10 h-10 cursor-pointer hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0 flex items-center justify-center"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
