import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 border-t border-gray-800 text-gray-500 text-sm">
      {/* Left: Copyright + About */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
        <p>© {new Date().getFullYear()} HireDue. All rights reserved.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSes3ksWrQd3xWZcwAnOBUflyYKS0EDe39UdOIJqBy6wbef13Q/viewform?usp=sharing&ouid=102225902072734396682"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Careers
        </a>
      </div>

      {/* Right: Social icons */}
      <div className="flex gap-5 text-gray-400 text-lg mt-3 sm:mt-0">
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
      </div>
    </footer>
  );
}
