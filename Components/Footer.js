import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <span >
            Développé par Marc P by{" "}
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />{" "}
         explored by Marc P
            <Link href="about"> Lien Test</Link> <wbr />   
          </span>
      </footer>
    </>
  );
}
