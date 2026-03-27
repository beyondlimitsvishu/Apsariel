"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 280);
  });

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-ink shadow-luxe backdrop-blur-md dark:border-white/10 dark:bg-[#161211]/85 dark:text-white"
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  );
}
