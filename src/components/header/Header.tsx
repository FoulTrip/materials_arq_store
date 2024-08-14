"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import NavigateHeader from "./nav/Navigate";
import { AnimatePresence } from "framer-motion";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <NavigateHeader />}
      </AnimatePresence>
    </>
  );
}

export default Header;
