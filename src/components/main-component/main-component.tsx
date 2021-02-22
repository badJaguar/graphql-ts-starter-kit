import React, { memo } from "react";
import logo from "../../assets/pokeapi-logo.png";
import { Pokemons } from "../pokemons/pokemons";
import styles from "./styles.module.scss";


export const MainComponent = memo(() => {

  return (
    <div className={styles.parent}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="" />
        </div>
      </header>
      <main className={styles.main}>
        <Pokemons />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
});
