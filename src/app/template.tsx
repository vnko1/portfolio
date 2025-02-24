"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="flex flex-col gap-6-xs"
        key={pathname}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
