"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cy-intro")) return;
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("cy-intro", "1");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-night"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            animate={{ opacity: 1, letterSpacing: "0.12em" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="shimmer-text font-display text-5xl tracking-wide sm:text-7xl"
          >
            CHROME YATRA
          </motion.p>
          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-night-line">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.35, ease: "easeInOut" }}
              className="h-full bg-accent"
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest2 text-bone-muted">
            The livery that rides India
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
