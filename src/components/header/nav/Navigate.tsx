import React, { useState } from "react";
import styles from "./navigate.module.css";
import LinkNav from "./link/LInk";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Cortes",
    href: "/cuts",
  },
  {
    title: "Materiales",
    href: "/materials",
  },
];

function NavigateHeader() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => (
            <LinkNav
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}

export default NavigateHeader;
