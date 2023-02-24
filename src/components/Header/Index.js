import React from 'react';
import Link from "next/link";
import Logo from "../../../public/airbnb-logo.png";
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon
 } from '@heroicons/react/solid';
import styles from "./index.module.scss";

const Index = () => {
    return (

        <header className={styles.header__main}>
            
            <div className={styles.header__logo}>
                <Link href="/">
                    <img src={Logo.src} alt="Airbnb" />
                </Link>
            </div>
            
            <div className={styles.header__search}>
                <input type="texte" placeholder="Rechercher"/>
                <SearchIcon className={styles.header__searchicon}/>
            </div>

            <di className={styles.header__Menu}>

                <p className={styles.header__Text}>Mettre mon logement sur Airbnb</p> 
                <GlobeAltIcon className={styles.header__GlobeIcon}/>

                <div className={styles.header__Profil}>
                    <MenuIcon className={styles.header__ }/>
                    <UserCircleIcon className={styles.header__UserCircleIcon}/>
                </div>

            </di>

        </header>

    );
}

export default Index;