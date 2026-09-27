"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-12">
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between h-[300px]">
        {/* Left Side: Hero Text */}
        <div>
          <h1 className="text-white text-4xl font-bold max-w-[500px]">
            Kenikmatan Pempek Khas, Elegansi dalam Setiap Gigitan
          </h1>
        </div>

        {/* Right Side: Hero Image */}
        <div className="relative w-[400px] h-[300px]">
          <Image
            src="/img/pempek.png"
            alt="Pempek"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
