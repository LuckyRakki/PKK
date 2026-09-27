import Image from "next/image";

export default function Testimoni() {
  return (
    <section className="text-center py-12 bg-gradient-to-t from-white to-orange-200">
      <h2 className="text-2xl mb-5 text-gray-800 font-bold">Testimoni</h2>
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-center gap-5 flex-wrap">
        <div className="w-[300px] h-[650px] rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            src="/img/testi.png"
            alt="Testimoni 1"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-[300px] h-[650px] rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            src="/img/testi2.png"
            alt="Testimoni 2"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
