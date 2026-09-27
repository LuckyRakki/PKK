import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white text-center py-5 text-sm">
      <div className="max-w-[1100px] mx-auto">
        <p>&copy; 2024 Pempek Nusantara. All Rights Reserved.</p>
        <div className="mt-2.5 flex justify-center gap-5">
          <a
            href="https://www.instagram.com/rasanusantara2?igsh=ZDY1MTFkZnVmY3Zj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 transition-transform"
          >
            <Image
              src="/img/instagram-icon.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://wa.me/6285727139643"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 transition-transform"
          >
            <Image
              src="/img/WhatsApp.webp"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
