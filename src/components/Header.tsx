"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-2.5 shadow-md">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center text-lg font-bold text-red-500">
          <Image
            src="/img/logo.png"
            alt="Pempek Nusantara"
            width={60}
            height={60}
            className="mr-2.5"
          />
          <span>Pempek Nusantara</span>
        </div>

        {/* Right Side: Delivery Location */}
        <div className="text-sm text-gray-700">
          <span className="font-bold">Deliver to:</span> 📍 Current Location
          Rumahnya Lucky Dariyasholja
        </div>
      </div>
    </header>
  );
}
