import Image from "next/image";
import Link from "next/link";

export default function MenuLarge() {
  return (
    <section className="py-8">
      {/* Item 1: Text Left, Image Right */}
      <div className="flex items-center justify-between my-8 mx-auto max-w-[1000px] bg-white/80 rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2 p-5">
          <h3 className="text-xl font-bold">Kapal Selam + Lenjer</h3>
          <p className="font-light mt-2 text-gray-600">
            Pempek klasik dengan bentuk panjang yang kenyal dan cita rasa ikan
            tenggiri yang khas. Cocok dinikmati dengan cuko manis atau pedas
            sesuai selera.
          </p>
          <Link
            href="#"
            className="inline-block mt-4 px-4 py-2.5 bg-orange-600 text-white no-underline rounded text-sm font-bold hover:bg-orange-700 transition-colors"
          >
            PROCEED TO ORDER &rarr;
          </Link>
        </div>
        <div className="relative w-1/2 h-[350px]">
          <Image
            src="/img/selam.jpeg"
            alt="Kapal Selam + Lenjer"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Item 2: Image Left, Text Right (reversed) */}
      <div className="flex flex-row-reverse items-center justify-between my-8 mx-auto max-w-[1000px] bg-white/80 rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2 p-5">
          <h3 className="text-xl font-bold">Pempek Lenjer</h3>
          <p className="font-light mt-2 text-gray-600">
            Tekstur kenyal dengan cita rasa ikan tenggiri yang khas, Pempek
            Lenjer adalah pilihan sempurna untuk pencinta pempek klasik.
            Dipadukan dengan kuah cuko yang kaya rasa, setiap gigitan memberikan
            sensasi gurih dan nikmat.
          </p>
          <Link
            href="#"
            className="inline-block mt-4 px-4 py-2.5 bg-orange-600 text-white no-underline rounded text-sm font-bold hover:bg-orange-700 transition-colors"
          >
            Proceed to order &rarr;
          </Link>
        </div>
        <div className="relative w-1/2 h-[350px]">
          <Image
            src="/img/lenjer.png"
            alt="Pempek Lenjer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
