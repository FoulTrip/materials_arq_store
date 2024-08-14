import Link from "next/link";
import styles from "./link.module.css";
import React from "react";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

interface LinkNavProps {
  data: {
    index: number;
    title: string;
    href: string;
  };
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

function LinkNav({ data, isActive, setSelectedIndicator }: LinkNavProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>

      <Link href={href}>{title}</Link>
    </motion.div>
  );
}

export default LinkNav;
