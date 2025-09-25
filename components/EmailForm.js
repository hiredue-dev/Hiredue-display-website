"use client";
import EmailSignup from "@/components/EmailSignup";

export default function EmailForm() {
  return (
    <section className="text-center py-20 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white ">
        Get Early Access
      </h2>

      {/* Subtext */}
      <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
        Be among the first to experience the future of job applications.
        Join thousands of professionals already on our waitlist.
      </p>

      {/* Reusable Email Signup */}
              <div className="mt-8">
                <EmailSignup endpoint="https://script.google.com/macros/s/AKfycbxQ0g58xhmdSe9QBKaM7PARx5fYnrdA-OM7MsjtCK-p5bZkIM9kI8hOyHdk4yrVzmPq/exec" />
              </div>
      <p className="mt-6 text-sm text-gray-500">
        Join 10,000+ professionals waiting for HireDue. No spam, ever.
      </p>
    </section>
  );
}
