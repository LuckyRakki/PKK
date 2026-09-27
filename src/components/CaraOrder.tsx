import Image from "next/image";

export default function CaraOrder() {
  const steps = [
    {
      img: "/img/lokasi.png",
      title: "Pilih Lokasi",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      img: "/img/menu.png",
      title: "Pilih Menu",
      desc: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      img: "/img/bayar.png",
      title: "Bayar",
      desc: "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      img: "/img/makan.png",
      title: "Selamat Makan",
      desc: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <section className="text-center py-12 mb-8">
      <h2 className="text-orange-500 text-2xl mb-5 font-bold">Cara Order</h2>
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-around flex-wrap gap-5">
        {steps.map((step) => (
          <div key={step.title} className="text-center w-[200px]">
            <Image
              src={step.img}
              alt={step.title}
              width={100}
              height={100}
              className="mx-auto mb-2.5"
            />
            <h3 className="text-lg font-bold text-gray-700">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
