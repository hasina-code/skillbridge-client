"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FAQ } from "./faqData";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  faq,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] shadow-md">

      {/* Question */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50 dark:hover:bg-[#111C30]"
      >
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
          {faq.question}
        </h3>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-200 dark:border-[#1F2A44] px-6 py-5">
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}