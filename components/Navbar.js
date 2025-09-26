import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="HireDue Logo" width={40} height={40} />
        <span className="text-xl font-bold text-white">HireDue</span>
      </Link>

      {/* Right: Social Icons: Not active right now */}
      {/* <div className="flex gap-5 text-gray-400 text-xl">
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaInstagram />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaFacebook />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_TWITTER}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaTwitter />
        </a>
      </div> */}
    </nav>
  );
}
