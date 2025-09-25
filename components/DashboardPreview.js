"use client";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";


export default function DashboardPreview() {

  return (
    <section className="relative flex flex-col items-center my-16 px-4 text-center">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
          w-[600px] h-[600px] 
          sm:w-[900px] sm:h-[900px] 
          lg:w-[1500px] lg:h-[1100px] 
          bg-[radial-gradient(circle,_#646bdb_0%,_#1a1a40_40%,_#000000_100%)] 
          blur-2xl rounded-full
        "
        />
      </div>

      {/* Content on top */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-6xl font-extrabold text-white">
  Coming <span className="text-[#646bdb]">Soon</span>
</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
        HireDue uses advanced AI to automatically apply to relevant LinkedIn jobs while you sleep. 
        Smart matching, personalized applications, and real-time tracking — all powered 
        by cutting-edge AI technology.
      </p>

         {/* Reusable Email Signup */}
        <div className="mt-8">
          <EmailSignup endpoint="https://script.google.com/macros/s/AKfycbxQ0g58xhmdSe9QBKaM7PARx5fYnrdA-OM7MsjtCK-p5bZkIM9kI8hOyHdk4yrVzmPq/exec" />
        </div>

        {/* Dashboard Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/dashboard.gif"
            alt="Dashboard Preview"
            width={1600}
            height={900}
            className="w-full h-auto "
            priority
          />
        </div>
      </div>
    </section>
  );
}
