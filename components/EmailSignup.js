"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EmailSignup({ endpoint }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new URLSearchParams({ email }),
      });

      if (res.ok) {
        setStatus("✅ Thanks! You’re on the waitlist.");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email for early access and offers"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 w-full sm:w-72 bg-black/70 border border-gray-700 
             text-gray-200 placeholder-gray-500 px-3 rounded-md 
             focus:outline-none focus:border-[#646bdb] focus:ring-1 focus:ring-[#646bdb]"
        />
        <button
          type="submit"
          className="h-14 w-full sm:w-40 bg-white text-black font-semibold rounded-md 
                     hover:bg-gray-200 hover:scale-105 transition-transform duration-200 
                     cursor-pointer focus:ring-2 z-10"
        >
          Get Early Access <ArrowRight className="ml-2 w-4 h-4 inline" />
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-400">{status}</p>}
    </div>
  );
}
