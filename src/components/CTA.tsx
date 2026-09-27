import Link from "next/link";

export default function CTA() {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-orange-400 to-orange-500">
      <h2 className="text-2xl font-bold text-white mb-5">
        Gassin !! Order Sekarang Juga
      </h2>
      <Link
        href="#"
        className="inline-block px-5 py-3 bg-orange-800 text-white no-underline text-base font-bold rounded hover:bg-orange-900 transition-colors"
      >
        PROCEED TO ORDER →
      </Link>
    </section>
  );
}
