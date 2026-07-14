"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("🎉 Thank you for subscribing!");

    setEmail("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-8 shadow-xl"
    >
      {/* Heading */}

      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        Subscribe Now
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
        Enter your email address and receive weekly learning resources,
        new course updates, and exclusive offers.
      </p>

      {/* Input */}

      <div className="relative mt-8">
        <Mail
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500"
        />

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-2xl border border-gray-300 dark:border-[#24324D] bg-transparent py-4 pl-14 pr-5 outline-none focus:border-cyan-500 dark:text-white"
        />
      </div>

      {/* Button */}

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-xl"
      >
        Subscribe

        <Send
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bottom Text */}

      <p className="mt-5 text-center text-sm text-gray-500 dark:text-gray-400">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </motion.form>
  );
}