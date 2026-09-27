import Image from "next/image";

export default function MenuSection() {
  const menuItems = [
    {
      name: "Kapal Selam + Lenjer",
      price: "Rp. 15.000",
      img: "/img/selam.jpeg",
    },
    { name: "Lenjer", price: "Rp. 5.000", img: "/img/lenjer.png" },
  ];

  return (
    <section className="py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-center gap-5">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-white p-2.5 rounded-lg shadow text-left w-[300px]"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="mt-2.5 font-bold">{item.name}</p>
            <span className="inline-block bg-orange-500/40 text-white px-2.5 py-1 rounded text-sm mt-1">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
