import React from 'react';
import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/airbnb_logo.svg";

const Index = () => {

  return (
    <header className={styles.header__main}>

      <div className={styles.header__menu}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/">
              <div className={styles.header__logo}>
                <img src={Logo.src} alt="airbnb" />
              </div>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              barre de recherche
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              mettre mon logement
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              planete
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              profil
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;