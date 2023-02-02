import React from 'react';
import Link from "next/link";
import styles from "./index.module.scss";
import iconPool from <FontAwesomeIcon icon="fa-solid fa-water-ladder" />;

const Index = () => {

  return (
    <header className={styles.header__main}>
      <div className={styles.header__menu}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/">
              <div className={styles.header__logo}>
                <img src={iconPool} alt="Pool" />
              </div>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              x
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              x
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/">
              x
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;