"use client";
import React, { useEffect } from "react";
import styles from "./header.module.css";
import { Images } from "@/constants/images";
import { Categories } from "@/constants/categories";
import Divider from "../styledComponents/Divider";
import { useRouter, usePathname } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo_container} onClick={() => router.push(`/`)}>
          <img className={styles.logo} src={Images.logo}></img>
        </div>
      </div>
      <Divider />
      <div className={styles.bottom}>
        <ul className={styles.navLinks}>
          {Categories?.map((item) => {
            return (
              <li
                className={`${styles.linkItem} ${
                  pathname.endsWith(item.slug) ? styles.active : ""
                }`}
                key={item.id}
                onClick={() => router.push(`/product-category/${item.slug}`)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
