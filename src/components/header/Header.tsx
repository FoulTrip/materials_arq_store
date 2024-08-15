"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import NavContainer from "./nav/Navigate";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import testLogo from "@/assets/test_logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <p className={styles.boxLogo}>
          <Image
            src={testLogo}
            className={styles.imageLogo}
            alt={"testLogo"}
            priority={true}
          />
        </p>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <NavContainer />}
      </AnimatePresence>
    </>
  );
}

export default Header;
